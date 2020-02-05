import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../../../utils/axiosWithAuth.js';
import JobCard from './JobCard.js';

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

export default function SuggestedJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axiosWithAuth().get('/debug/job_listings')
        .then(response => {
            // console.log('get all jobs response: ', response);
            setJobs(response.data);
            setLoading(false);
        })
        .catch(err => {
            console.log("suggestedJobs get all jobs error:", err.response.data.message)
            setLoading(false);
        });
    },[]);

    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <div className="card-container">
                {jobs.map((job, index) => {
                    // console.log(job);
                    return (
                        <JobCard key={index} title={job.title} company={job.companyName} location={`${job.city}, ${job.stateOrProvince}`} /> // pay_exact={user.pay_exact} 
                    )
                })}
            </div>
        </StyledLoader>
    )
}

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;