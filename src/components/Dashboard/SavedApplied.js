import React from 'react';
import SavedJobsList from './SavedJobsList';
import AppliedJobsList from './AppliedJobsList';

const SavedApplied = () => {

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

export default SavedApplied;