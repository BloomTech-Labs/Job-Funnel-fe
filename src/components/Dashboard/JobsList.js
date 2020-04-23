import React from 'react';
import JobCard from './JobCard';
import { Loading } from "./Loading";

const JobsList = ( { jobs, loading, jobDetailsLookup } ) => {

    return (
        <div className="jobs-list">
            {loading  ? <Loading />: 
                <div> 
                    {jobs.map(job => {
                        return <JobCard job={job} key={job.job_id} jobDetailsLookup={jobDetailsLookup}/>
                    })}
                </div>
            }
        </div>
    )
}

export default JobsList;