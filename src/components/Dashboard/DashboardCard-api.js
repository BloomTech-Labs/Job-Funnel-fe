import React, {useState, useEffect } from 'react';
import axios from 'axios';
import DashboardCards from '../Dashboard/DashboardCards';

export default function DashBoardCardAPI() {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        axios
            .get('https://quickhire.herokuapp.com/api/debug/job_listings')
            .then(response => {
                const jobs = response.data;
                console.log(response)
                setJobs([jobs])
            })
            .catch(error => {
                console.log("Sorry, you've got an error!", error)
            });
    },[]);

    return (
        <div>
            <h1>Hello</h1>
        </div>
    )
}