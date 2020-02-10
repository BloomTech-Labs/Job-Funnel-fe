import React, { useState, useEffect } from 'react'

import axiosWithAuth from "../../../utils/axiosWithAuth.js"


export default function JobDetails(props) {

   const [details, setDetails] = useState({});
    

    useEffect(()=> {
        axiosWithAuth().get(`/jobs/${props.match.params.id}`)
            .then(response => {
                console.log('job details axios response', response.data);
                setDetails(response.data);
            })
            .catch(err => console.error(err))
    }, []);

    const postedDate = Date(details.post_date_utc)

    return (
        <div className="job-details-container">
        <div className="deets-apply-button">
            <button>Apply to Job</button>
        </div>
        <div className="deets-div">
            <h2>{details.title}</h2>
            <p className="company-name">{details.companyName}</p>
            <p className="job-location">{details.city} {details.stateOrProvince}</p>
            <p className="job-posting-date">{postedDate}</p>
        </div>
        
        <div className="desc-div" >
        <h2 className="job-description" >{details.description}</h2>
        </div>
        </div>
    )
}

