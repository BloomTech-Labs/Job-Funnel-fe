import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../../utils/axiosWithAuth";
import { connect } from "react-redux";

import {
  updateApplied,
  deleteApplied,
} from "../../../redux-store/App/AppActions";
import heartFull from "./../../../images/heartFull.svg";

import styled from "styled-components";
import { Loading } from "./../Loading";
import { withRouter } from "react-router-dom";
// applied jobs component allows a spot for you to pretty much save jobs that you've applied for.
function AppliedJobs(props) {
  const [apply, setApply] = useState([]);
  const [loading, setLoading] = useState(false);

  const id = props.currentUser.id;

  // get request in order to get the job by the saved id
  useEffect(() => {
    setLoading(true);
    axiosWithAuth()
      .get(`/saved/${id}`)
      .then((res) => {
        console.log("response from applied jobs", res.data);
        //below -> filtering for items in the array that have the status coded in as applied
        let AppliedCopy = res.data.filter((e) => e.status === "applied");
        setApply(AppliedCopy);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error.message);
        setLoading(false);
      });
  }, [id, props.applied]);

  /*   const JobDetails = (job_id) => {
    setTimeout(() => {
      props.history.push(`/Dashboard/Job/${job_id}`);
    }, 100);
  }; */
  // delete request to remove the jobs that you don't want on your applied jobs page.
  const handleDelete = (job_id) => {
    setLoading(true);
    props.deleteApplied(job_id);
  };

  //if loading is happening, then only return loader
  if (loading === true) {
    return <Loading />;
  }

  console.log("THIS IS APPLIED JOBS", apply);
  // else, return this
  return (
    <div className="saved-jobs-main">
      <div className="saved-header">
        <h1>Applied Jobs</h1>
      </div>
      {apply.length < 1 ? (
        //if object is empty, render empty message
        <div className="empty-jobs">
          <div>
            <p>You didn't applied to any jobs.</p>
          </div>
        </div>
      ) : (
        apply.map((e) => {
          return (
            <div key={id} className="card-saved-jobs">
              <div className="card-saved-header">
                <h3>{e.companyName}</h3>
                <button onClick={() => handleDelete(e.job_id)}>
                  <p>Delete</p>
                </button>
              </div>
              <div className="card-saved-info">
                <a href={e.testexternal_url} target="_blank">
                  More
                </a>
              </div>
              {/*      <p>{e.description.slice(0, 100)}...</p>
              <div className="saved-buttons">
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
    applied: state.AppReducer.applied,
  };
};
export default withRouter(
  connect(mapStateToProps, { updateApplied, deleteApplied })(AppliedJobs)
);

/* const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`; */
