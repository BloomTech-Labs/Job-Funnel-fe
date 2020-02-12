import React from 'react';
import JobDetails from './JobDetails';

import {Link} from "react-router-dom";

function JobCard(jobs) {
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
                <h3>{jobs.title}</h3>
                <p>{jobs.company}</p>
                <span>📍 {jobs.location}</span>
            </div>
            <div className='jobButtons' >
                <button>Save</button>
                <Link to={`/Dashboard/Job/${jobs.id}`}>
                <button>View</button>
                </Link>
            </div>
        </div>
    )
}

export default JobCard;


// import React from 'react';

// const JobCard = ({ jobs, loading }) => {
//     if(loading) {
//         return <h2>Loading...</h2>
//     }

//     return (
//         <div className="jobCard">
//             {jobs.map(job => (
//                 <div key={job.id}
//                     id={job.id} 
//                     title={job.title} 
//                     company={job.companyName} 
//                     location={`${job.city}, ${job.stateOrProvince}`} />
//             ))}
//         </div>
//     )
// }

// export default JobCard;

