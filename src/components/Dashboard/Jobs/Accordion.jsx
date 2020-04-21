import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import heart from "./../../../images/heartEmpty.svg";
import heartFull from "./../../../images/heartFull.svg";
import { updateSaved, deleteSaved } from "../../../redux-store/App/AppActions";
import { Loading } from "./../Loading";
import axiosWithAuth from "./../../../utils/axiosWithAuth";
function Accordion(props) {
  console.log("PROPS FROM ACCORDION", props);

  const [open, setOpen] = useState(false);
  const [details, setDetails] = useState({});
  const [description, setDescription] = useState({});
  const [loading, setLoading] = useState(false);

  const user_id = props.currentUser.id;
  const job_id = props.id;
  const [modal, setModal] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [applytoggle, setApplytoggle] = useState(false);

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

  //check to see if saved

  useEffect(() => {
    axiosWithAuth()
      .get(`/saved/${user_id}`)
      .then((res) => {
        let checkSaved = res.data.filter(
          (e) => e.status === "saved" && e.job_id === job_id
        );
        checkSaved.length > 0 && checkSaved
          ? setToggle(true)
          : setToggle(false);
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [props.savedArray]);

  useEffect(() => {
    setLoading(true);
    axiosWithAuth()
      .get(`/jobs/${job_id}`)
      .then((response) => {
        console.log("job details axios response", response.data);
        setDetails(response.data);
        setDescription(response.data.description);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [job_id]);

  //handles save, sends the saved jobs to the saved endpoint.
  const handleSave = () => {
    if (toggle === false) {
      props.updateSaved(saved);
      setToggle(true);

      //Delete save
    } else if (toggle === true) {
      props.deleteSaved(job_id);
      setToggle(false);
    }
  };

  const onClick = () => {
    setOpen(!open);
  };

  const className = `accordion-item ${open && "accordion-item--opened"}`;

  //Gives the posted date
  let date = new Date(details.post_date_utc);
  console.log("date", date);

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

          {toggle === false ? (
            <button onClick={handleSave}>
              <img src={heart} />{" "}
            </button>
          ) : (
            <button onClick={handleSave}>
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
        <span className="accordion-item__icon" onClick={onClick} />
      </div>

      <div className="accordion-item__inner">
        <div className="accordion-item__content">
          <p className="accordion-item__paragraph">{details.city}</p>
          <p className="accordion-item__paragraph">{details.stateOrProvince}</p>
          <p>
            {dateMonth}-{dateDay}-{dateYear}
          </p>
          <a className="job-listing-link" href={details.testexternal_url}>
            Link to Application
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
    savedArray: state.AppReducer.saved,
  };
};

export default connect(mapStateToProps, { updateSaved, deleteSaved })(
  Accordion
);
