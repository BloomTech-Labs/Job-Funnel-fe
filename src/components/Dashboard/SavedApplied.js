import React, { useEffect, useState } from 'react';
import SavedJobsList from './SavedJobsList';
import AppliedJobsList from './AppliedJobsList';
import { connect } from "react-redux";
import { getSavedAppliedJobs, updateSaved, deleteSaved } from '../../redux-store/App/AppActions';

const SavedApplied = (props) => {

    useEffect(() => {
        if (props.currentUser !== "") {
            props.getSavedAppliedJobs(props.currentUser.id);
            
        }
    }, [props.currentUser])

    return (
        <div className="saved-applied-wrap">

            <div className="top-box">
                <h4>Saved Jobs</h4>
                <SavedJobsList />
            </div>

            <div className="bottom-box">
                <h4>Applied Jobs</h4>
                <AppliedJobsList />
            </div>

        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
        savedArray: state.AppReducer.saved, 
        appliedArray: state.AppReducer.applied
    }
}

export default connect(mapStateToProps, { getSavedAppliedJobs, updateSaved, deleteSaved })(SavedApplied);