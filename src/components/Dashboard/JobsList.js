import React from 'react';
import JobCard from './JobCard';

const JobsList = ( { jobs } ) => {

    return (
        <div className="jobs-list">
            {jobs.map(job => {
                return <JobCard job={job} key={job.job_id}/>
            })}
        </div>
    )
}

export default JobsList;