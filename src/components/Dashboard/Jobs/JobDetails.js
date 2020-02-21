import React, { useState, useEffect } from 'react'

import axiosWithAuth from "../../../utils/axiosWithAuth.js"


//Job Details is what you're taken to whenever you click to see more information on the Job Cards.
export default function JobDetails(props) {

   const [details, setDetails] = useState({});
    
//Axios call to get dynamic response, based on which card you've clicked on.
    useEffect(()=> {
        axiosWithAuth().get(`/jobs/${props.match.params.id}`)
            .then(response => {
                console.log('job details axios response', response.data);
                setDetails(response.data);
            })
            .catch(err => console.error(err))
    }, []);

    //Gives the posted date
    const postedDate = Date(details.post_date_utc)

    //Styling for the Job Details Component Page
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
            <a className="job-listing-link" href={details.testexternal_url}>{details.testexternal_url}</a>
        </div>
        
        <div className="desc-div" >
        <p className="job-description" >{details.description}</p>
        </div>
        </div>
    )
}

