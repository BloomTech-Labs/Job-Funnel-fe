import React, { useEffect } from "react";
import AppliedJobCard from "./AppliedJobCard";
import { connect } from "react-redux";

const AppliedJobsList = (props) => {
  useEffect(() => {}, [props.appliedArray]);
  return (
    <div className="applied-jobs-list">
      {props.appliedArray.map((job) => {
        return <AppliedJobCard job={job} key={job.job_id} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.AppReducer.currentUser,
    appliedArray: state.AppReducer.applied,
  };
};

export default connect(mapStateToProps, {})(AppliedJobsList);
