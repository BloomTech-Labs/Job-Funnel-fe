import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../../../utils/axiosWithAuth.js';
import JobCard from './JobCard.js';

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";
import InfiniteScroll from 'react-infinite-scroll-component';


export default function SuggestedJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    const [offset, setOffset] = useState(0)

    useEffect(() => {
        setLoading(true);
        axiosWithAuth().get('/debug/job_listings')
        .then(response => {
            console.log('get all jobs response: ', response.data);
            setJobs(response.data);
            setLoading(false);
        })
        .catch(err => {
            console.log("suggestedJobs get all jobs error:", err.response.data.message)
            setLoading(false);
        });
    },[]);

    const getMoreJobs = () => {
        axiosWithAuth().get(`/debug/job_listings?offset=${offset}`)
        .then(response => {
            setJobs(jobs.concat(response.data))
            console.log('get job results', offset)
            setOffset(offset + 100)
        })
        .catch(err => {
            console.log("suggestedJobs get all jobs error:", err.response.data.message)
            setLoading(false);
        });
    }

    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <InfiniteScroll dataLength={jobs.length} next={getMoreJobs} hasMore={true}>
                <div className="card-container">
                    {jobs.map((job, index) => {
                        // console.log(job);
                        return (
                            <JobCard key={index} 
                                id={job.id} 
                                title={job.title} 
                                company={job.companyName} 
                                location={`${job.city}, ${job.stateOrProvince}`} 
                            />
                        )
                    })}
                </div>
            </InfiniteScroll> 
        </StyledLoader>
    )
}

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;
