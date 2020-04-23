import React, { useEffect } from 'react';
import { connect } from "react-redux";
import SavedJobCard from './SavedJobCard';

const SavedJobs = ( props ) => {

    useEffect(() => {

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