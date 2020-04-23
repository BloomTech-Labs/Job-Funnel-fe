import React, { useState, useEffect } from "react";

import axiosWithAuth from "../../../utils/axiosWithAuth";
import heartFull from "./../../../images/heartFull.svg";
import { connect } from "react-redux";
import { updateSaved, deleteSaved } from "../../../redux-store/App/AppActions";
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { Loading } from "./../Loading";

//Component that makes up the Saved Jobs page on site
function SavedJobs(props) {
  const [save, setSave] = useState([]);
  const [loading, setLoading] = useState(false);
  const id = props.currentUser.id;
  console.log("WHATS THIS?", id);

  //axiosWithAuth is getting the saved id's that are made on the SuggestedJobs component whenever you click the save button
  useEffect(() => {
    setLoading(true);
    if (id) {
      console.log("theres id", id);
      axiosWithAuth()
        .get(`/saved/${id}`)
        .then((res) => {
          let SavedCopy = res.data.filter((e) => e.status === "saved");
          setSave(SavedCopy);
          setLoading(false);
        })
        .catch(({ name, code, message, stack }) => {
          console.error("ERROR", { name, code, message, stack });
          setLoading(false);
        });
    }
  }, [id, props.saved, props.deleteSaved]);

  //deletes the selected saved job
  const handleDelete = (job_id) => {
    setLoading(true);
    props.deleteSaved(job_id);
  };

  //pushes saved jobs to here, and also returns nothing is available if you haven't saved any jobs, with a link back to the dashboard.
  const JobDetails = (job_id) => {
    setTimeout(() => {
      props.history.push(`/Dashboard/Job/${job_id}`);
    }, 100);
  };
  console.log("THS IS SAED", save);
  //if loading is happening, then only return loader
  if (loading === true) {
    return <Loading />;
  }
  // else, return this
  return (
    <div className="saved-jobs-main">
      <div className="saved-header">
        <h1>Saved Jobs</h1>
      </div>

      {save.length < 1 ? (
        //if object is empty, render empty message
        <div className="empty-jobs">
          <div>
            <p>No jobs saved.</p>
          </div>
        </div>
      ) : (
        save.map((e) => {
          return (
            <div key={id} className="card-saved-jobs">
              <div className="card-saved-header">
                <h3>{e.companyName}</h3>
                <button onClick={() => handleDelete(e.job_id)}>
                  <img src={heartFull} />
                </button>
              </div>
              <div className="card-saved-info">
                <a href={e.testexternal_url} target="_blank">
                  More
                </a>
              </div>

              {/* <p>{e.description.slice(0, 50)}...</p> */}
              {/* <div className="saved-buttons">
                <button onClick={() => JobDetails(e.job_id)}>More Info</button>
              </div> */}
            </div>
          );
        })
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.AppReducer.currentUser,
    saved: state.AppReducer.saved,
  };
};
export default withRouter(
  connect(mapStateToProps, { updateSaved, deleteSaved })(SavedJobs)
);

/* const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`; */
