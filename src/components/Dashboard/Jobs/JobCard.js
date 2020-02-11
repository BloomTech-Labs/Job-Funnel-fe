import React from 'react';
import JobDetails from './JobDetails';

import {Link} from "react-router-dom";

function JobCard(props) {
    //  console.log(props, "props.match.params error")


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
                <button>Save</button>
                <Link to={`/Dashboard/Job/${props.id}`}>
                <button>View</button>
                </Link>
            </div>
        </div>
    )
}

export default JobCard;

