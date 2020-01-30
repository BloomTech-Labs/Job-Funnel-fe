import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../../utils/axiosWithAuth.js';
import DashboardCards from '../Dashboard/DashboardCards';

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

export default function SuggestedJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);


    useEffect(() => {
        setLoading(true);
        axiosWithAuth().get('/debug/job_listings')
        .then(response => {
            console.log(response);
            setJobs(response.data);
            setLoading(false);
        })
        .catch(error => {
            console.log("Sorry, you've got an error!", error)
            setLoading(false);
        });
    },[]);

    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <div className="suggested-jobs-container">
                    {jobs.map((user, index) => {
                        return (
                            <DashboardCards key={index}
                                title={user.title}
                                // pay_exact={user.pay_exact}
                            />
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