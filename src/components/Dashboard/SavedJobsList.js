import React, { useEffect, useState } from 'react';
// import axiosWithAuth from '../../utils/axiosWithAuth';
import { connect } from "react-redux";
// import { getSavedAppliedJobs, updateSaved, deleteSaved } from '../../redux-store/App/AppActions';
import SavedJobCard from './SavedJobCard';

const SavedJobs = ( props ) => {

    useEffect(() => {
        console.log('SAVED COMPONENT', props.savedArray)
    }, [props.savedArray])

    return (
        <div className="saved-jobs-list">
            {props.savedArray.map(job => {
                return <SavedJobCard job={job} key={job.job_id} />
            })}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
        savedArray: state.AppReducer.saved
    }
}

export default connect(mapStateToProps, { })(SavedJobs);