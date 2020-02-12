import React, {useState, useEffect} from 'react'
import axiosWithAuth from '../../../utils/axiosWithAuth.js';
import JobCard from './JobCard.js';

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";


export default function SuggestedJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [currentPage, setCurrentPage] = useState(1);
    // const [postPerPage, setPostPerPage] = useState(10)

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axiosWithAuth().get('/debug/job_listings');
            setJobs(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, [])

    // const indexOfLastPost = currentPage * postPerPage;
    // const indexOfFirstPost = indexOfLastPost - postPerPage;
    // const currentJobs = jobs.slice(indexOfFirstPost, indexOfLastPost)

    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <div className="card-container">
                {jobs.splice(0,9).map((job, index) => {
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
        </StyledLoader>
    )
}

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;


// import React, {useState, useEffect} from 'react'
// import axiosWithAuth from '../../../utils/axiosWithAuth.js';
// import JobCard from './JobCard.js';

// import {Link} from "react-router-dom";

// export default function SuggestedJobs() {
//     const [jobs, setJobs] = useState([]);
//     const [loading, setLoading] = useState(false);
//     const [currentPage, setCurrentPage] = useState(1);
//     const [postPerPage, setPostPerPage] = useState(10)

//     useEffect(() => {
//         const fetchPosts = async () => {
//             setLoading(false);
//             const res = await axiosWithAuth().get('/debug/job_listings');
//             setJobs(res.data);
//             setLoading(false);
//         }

//         fetchPosts();
//     }, [])

//     const indexOfLastPost = currentPage * postPerPage;
//     const indexOfFirstPost = indexOfLastPost - postPerPage;
//     const currentJobs = jobs.slice(indexOfFirstPost, indexOfLastPost)

//     return(
//         <div>
//             <JobCard jobs={currentJobs} loading={loading}/>
//             <div>
//              <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 15px', }}> 
//                  <h4>Your Skills match 6/7</h4>
//              </div>
//              <div className="card-image">
//                  <img className="image" src="http://pngimg.com/uploads/microsoft/microsoft_PNG18.png"/>
//              </div>
//              <div className="card-text">
//                  <h3>{jobs.title}</h3>
//                  <p>{jobs.company}</p>
//                  <span>📍 {jobs.location}</span>
//              </div>
//              <div className='jobButtons' >
//                  <button>Save</button>
//                 <Link to={`/Dashboard/Job/${jobs.id}`}>
//                  <button>View</button>
//                 </Link>
//              </div>
//             </div>
//         </div>
//     )
// }
