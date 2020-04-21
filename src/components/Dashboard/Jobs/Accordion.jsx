import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import heartEmpty from "./../../../images/heartEmpty.svg";
import heartFull from "./../../../images/heartFull.svg";

import { updateSaved, deleteSaved } from "../../../redux-store/App/AppActions";
import axiosWithAuth from "./../../../utils/axiosWithAuth";
function Accordion(props) {
  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [loading, setLoading] = useState(false);
  const [heart, setHeart] = useState(0);
  const [hide, setHide] = useState(false);
  const user_id = props.currentUser.id;
  const job_id = props.id;

  //state for saved status
  const [saved, setSaved] = useState({
    user_id: user_id,
    job_id: job_id,
    status: "saved",
  });

  //state for applied status
  const [applied, setApplied] = useState({
    user_id: user_id,
    job_id: job_id,
    status: "applied",
  });

  const handleSave = () => {
    setHeart(1);
    setHide(1);
    props.updateSaved(saved);
  };

  const handleUnsave = () => {
    setHeart(0);
    props.deleteSaved(saved.job_id);
  };

  useEffect(() => {
    setLoading(true);
    axiosWithAuth()
      .get(`/jobs/${job_id}`)
      .then((response) => {
        setDetails(response.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [job_id]);

  //handles save, sends the saved jobs to the saved endpoint.

  const expand = () => {
    setOpen(!open);
  };

  const className = `accordion-item ${open && "accordion-item--opened"}`;

  //Gives the posted date
  let date = new Date(details.post_date_utc);
  let dateMonth = date.getUTCMonth() + 1;
  let dateDay = date.getDate();
  let dateYear = date.getFullYear();

  if (loading === true) {
    return null;
  }

  return (
    <div className={className}>
      <div className="accordion-item__line">
        <div className="accordion-header">
          <p className="accordion-item__title">{props.company}</p>
          {heart == 0 ? (
            <button onClick={handleSave}>
              <img src={heartEmpty} alt="empty heart" />
            </button>
          ) : (
            <button onClick={handleUnsave}>
              <img src={heartFull} />
            </button>
          )}
        </div>

        <div className="card-text">
          <div className="card-info">
            <h3>{props.title}</h3>
          </div>
        </div>

        <div className="jobButtons">
          <a href={details.testexternal_url} target="_blank">
            Apply
          </a>
        </div>
        <div className="accordion-footer" onClick={expand}>
          <span className="accordion-item__icon" />
        </div>
      </div>

      <div className="accordion-item__inner">
        <div className="accordion-item__content">
          <p className="accordion-item__paragraph">{details.city}</p>
          <p className="accordion-item__paragraph">{details.stateOrProvince}</p>
          <p>
            {dateMonth}-{dateDay}-{dateYear}
          </p>
          <a className="job-listing-link" href={details.testexternal_url}>
            Links to Application
          </a>
          <p>{details.description}</p>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.AppReducer.currentUser,
  };
};

export default connect(mapStateToProps, { updateSaved, deleteSaved })(
  Accordion
);
