import React from "react";
import { connect } from "react-redux";
import { deleteApplied } from "../../redux-store/App/AppActions";

const AppliedJobCard = (props) => {
  const handleRemoveAppliedJob = () => {
    props.deleteApplied(props.job.job_id);
  };

  return (
    <div className="applied-job-card">
      {props.job.companyName}
      <button onClick={handleRemoveAppliedJob}>Delete</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.AppReducer.currentUser,
    appliedArray: state.AppReducer.applied,
  };
};

export default connect(mapStateToProps, { deleteApplied })(AppliedJobCard);
