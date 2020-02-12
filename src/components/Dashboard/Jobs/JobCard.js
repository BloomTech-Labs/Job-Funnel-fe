import React, {useState, useEffect} from 'react';
import JobDetails from './JobDetails';
import axiosWithAuth from "../../../utils/axiosWithAuth"

import {Link} from "react-router-dom";

function JobCard(props) {
    //  console.log("do i have props.match.params.id??", props)
    console.log('job id?', props)
    //  console.log('please tell me its not this easy', props.currentuser.id)

    const user_id = sessionStorage.getItem('id');
    const job_id = props.id;

    // console.log('user id', user_id);
    
    const [saved, setSaved] = useState({
        user_id: user_id,
        job_id: job_id,
        status: "saved"
    })

    
    
    const handleSave = () => {
        console.log('saved ', saved)
        axiosWithAuth().post('/saved/', saved)
        .then(response => {
            // console.log('handle save job response', response.data)
            // console.log('response id', response.data.id)
            setSaved({...saved})
            // console.log('saved', saved)
            
        })
        .catch(error => {
            console.error(error)
        })

    }


    return (
        <div className="jobCard">
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 15px', }}> 
                <h4>Your Skills match 6/7</h4>
            </div>
            <div className="card-image">
                <img className="image" src="http://pngimg.com/uploads/microsoft/microsoft_PNG18.png"/>
            </div>
            <div className="card-text">
                <h3>{props.title}</h3>
                <p>{props.company}</p>
                <span>📍 {props.location}</span>
            </div>
            <div className='jobButtons' >
                <button onClick={handleSave}>Save</button>
                <Link to={`/Dashboard/Job/${props.id}`}>
                <button>View</button>
                </Link>
            </div>
        </div>
    )
}

export default JobCard;

