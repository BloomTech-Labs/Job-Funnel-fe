import React, { useState, useEffect } from 'react';
import JobCard from './JobCard.js';
import axiosWithAuth from '../../../utils/axiosWithAuth';

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

// JOB HISTORY
export default function ViewedJobs() {
    const [view, setView] = useState([]);
    const [loading, setLoading] = useState(false);
    const [status, setStatus] = useState('Saved')

    useEffect(()=> {
        axiosWithAuth().get(`/history`)
            .then(res => {
                // setLoading(true);
                // setStatus(status);
                console.log('History details', res.data);

            })
            .catch(err => console.error(err))
    }, []);

    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <div className="card-container">
                {view.map((job, index) => {
                    // console.log(job);
                    return (
                        <JobCard key={index} id={job.id} title={job.title} company={job.companyName} location={`${job.city}, ${job.stateOrProvince}`} /> // pay_exact={user.pay_exact} 
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