import React from 'react';

const AppliedJobCard = ( { job } ) => {

    return (
        <div className="applied-job-card">
            {job.companyName}
        </div>
    )
}

export default AppliedJobCard;