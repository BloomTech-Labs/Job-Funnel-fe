import React from "react";
import { connect } from "react-redux";
import { deleteSaved } from "../../redux-store/App/AppActions";

const SavedJobCard = (props) => {
  const handleRemoveSavedJob = () => {
    props.deleteSaved(props.job.job_id);
  };

  return (
    <div className="saved-job-card">
      {props.job.companyName}
      <button onClick={handleRemoveSavedJob}>Delete</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.AppReducer.currentUser,
    savedArray: state.AppReducer.saved,
  };
};

export default connect(mapStateToProps, { deleteSaved })(SavedJobCard);
