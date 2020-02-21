import React, {useState, useEffect} from 'react'
// import axiosWithAuth from '../../../utils/axiosWithAuth.js';
import JobCard from './JobCard.js';
import Filter from "../Filter";
import searchAPI from '../../../utils/searchAPI';
import {useLocation} from "react-router-dom"

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";
// import InfiniteScroll from 'react-infinite-scroll-component';


export default function SuggestedJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [offset, setOffset] = useState(0);
    const location = useLocation();


    // useEffect(() => {
    //     setLoading(true);
    //     axiosWithAuth().get('/debug/job_listings')
    //     .then(response => {
    //         console.log('get all jobs response: ', response.data);
    //         setJobs(response.data);
    //         setLoading(false);
    //     })
    //     .catch(err => {
    //         console.log("suggestedJobs get all jobs error:", err.response.data.message)
    //         setLoading(false);
    //     });
    // },[]);

    // const getMoreJobs = () => {
    //     axiosWithAuth().get(`/debug/job_listings?offset=${offset}`)
    //     .then(response => {
    //         setJobs(jobs.concat(response.data))
    //         console.log('get job results', offset)
    //         setOffset(offset + 100)
    //     })
    //     .catch(err => {
    //         console.log("suggestedJobs get all jobs error:", err.response.data.message)
    //         setLoading(false);
    //     });
    // };
    // import React, {useState,useEffect} from 'react';
   
    
    // const Filter = () => {
        let queryDelay;
        const [search, setSearch] = useState("");
    
        const handleInputChange = changeEvent => {
            const searchQuery = changeEvent.target.value;
            const searchInputName = changeEvent.target.name;
            
            clearTimeout(queryDelay);
            queryDelay = setTimeout(() => {
                setSearch({...search, [searchInputName]: searchQuery });
            }, 175);
        };
    
        const onSelectChange = (selectEvent) => {
            const selectValue = selectEvent.target.value;
            const selectInputName = selectEvent.target.name;
            setSearch({...search, [selectInputName]: selectValue ? selectValue : undefined });
            console.log('set value', selectValue)
        }
    
        useEffect(() => {

            searchAPI().get('/search', {
                 params: search,
            }).then((response) => {
                setJobs(response.data.responses);
                console.log({response})
            })
        }, [search.search, search.jobType, search.experience])
    
        // return (
            // <div className="filter-class">
            //     <div>
            //         <label>
            //             <input className="search-bar"
            //                 type="text"
            //                 name="search"
            //                 placeholder="Search for Jobs"
            //                 tabIndex="0"
            //                 onChange={handleInputChange}/>
            //         </label>
            //     </div>
            //     <div>
            //         <select className="job-select" onChange={onSelectChange} name="jobType">
            //             <option value={''}>Job Type</option>
            //             <option value={"Full Time"}>Full Time</option>
            //             <option value={"Part Time"}>Part Time</option>
            //             <option value={"Contract"}>Contract</option>
            //         </select>
            //         </div>
            //         <div>
            //         <select className="experience-select" onChange={onSelectChange} name="experience">
            //             <option value={''}>Experience</option>
            //             <option value={"Junior Position"}>Junior</option>
            //             <option value={"Mid-Level Position"}>Mid-Level</option>
            //             <option value={"Senior Position"}>Senior</option>
            //         </select>
            //         </div>
            //         <div>
               
            //     </div>
            // </div>
        // )
    // }
    
    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            {/* <InfiniteScroll dataLength={jobs.length} next={getMoreJobs} hasMore={true}> */}
         

           <div className="filter-class">
                <div>
                    <label>
                        {/* <input className="search-bar" */}
                            {/* // value={search}
                            // type="text"
                            // name="search"
                            // placeholder="Search for Jobs"
                            // tabIndex="0"
                            // onChange={handleInputChange}/> */}
                            <select className="job-select" onChange={onSelectChange} name="title">
                            <option value={''}>Job Type</option>
                            <option value={"java"}>java</option>
                            <option value={"python"}>python</option>
                            <option value={"javascript"}>javascript</option>
                            <option value={"c++"}>c++</option>
                            <option value={"typescript"}>typescript</option>
                            <option value={"kotlin"}>kotlin</option>
                            <option value={"ruby"}>ruby</option>
                            <option value={"php"}>php</option>
                            <option value={"react"}>react</option>
                            <option value={"ui/ux"}>UI/UX</option>
                            <option value={"backend"}>Back-end</option>
                            <option value={"frontend"}>Front-end</option>
                            <option value={"data science"}>Data Science</option>

                        </select> 
                    </label>
                    {console.log('search value',search.value)}
                </div>
                <div>
                    <select className="job-city" onChange={onSelectChange} name="city">
                        <option value={''}>City</option>
                        <option value={"seattle"}>seattle</option>
                        <option value={"boston"}>boston</option>
                        <option value={"denver"}>denver</option>
                        <option value={"austin"}>austin</option>
                        <option value={"tampa"}>tampa</option>
                        <option value={"atlanta"}>atlanta</option>
                        <option value={"huntsville"}>huntsville</option>
                        <option value={"raleigh"}>raleigh</option>
                        <option value={"san jose"}>san jose</option>
                        <option value={"san francisco"}>san francisco</option>
                        <option value={'baltimore'}>baltimore</option>
                        <option value={"dallas"}>dallas</option>
                        <option value={"charlotte"}>charlotte</option>


                    </select>
                    </div>
                    <div>
                    <select className="job-state" onChange={onSelectChange} name="state_province">
                        <option value={''}>State</option>
                        <option value={"AL"}>AL</option>
                        <option value={"AK"}>AK</option>
                        <option value={"AZ"}>AZ</option>
                        <option value={"AR"}>AR</option>
                        <option value={"CA"}>CA</option>
                        <option value={"CO"}>CO</option>
                        <option value={"CT"}>CT</option>
                        <option value={"DE"}>DE</option>
                        <option value={"FL"}>FL</option>
                        <option value={'GA'}>GA</option>
                        <option value={"HI"}>HI</option>
                        <option value={"ID"}>ID</option>
                        <option value={"IL"}>IL</option>
                        <option value={"IN"}>IN</option>
                        <option value={"AI"}>AI</option>
                        <option value={"KS"}>KS</option>
                        <option value={"KY"}>KY</option>
                        <option value={"LA"}>LA</option>
                        <option value={"ME"}>ME</option>
                        <option value={"MD"}>MD</option>
                        <option value={"MA"}>MA</option>
                        <option value={"MI"}>MI</option>
                        <option value={"MN"}>MN</option>
                        <option value={"MS"}>MS</option>
                        <option value={"MO"}>MO</option>
                        <option value={"MT"}>MT</option>
                        <option value={"NE"}>NE</option>
                        <option value={"NV"}>NV</option>
                        <option value={"NH"}>NH</option>
                        <option value={"NJ"}>NJ</option>
                        <option value={"NM"}>NM</option>
                        <option value={"NY"}>NY</option>
                        <option value={"NC"}>NC</option>
                        <option value={"ND"}>ND</option>
                        <option value={"OH"}>OH</option>
                        <option value={"OK"}>OK</option>
                        <option value={"OR"}>OR</option>
                        <option value={"PA"}>PA</option>
                        <option value={"RI"}>RI</option>
                        <option value={"SC"}>SC</option>
                        <option value={"SD"}>SD</option>
                        <option value={"TN"}>TN</option>
                        <option value={"TX"}>TX</option>
                        <option value={"UT"}>UT</option>
                        <option value={"VT"}>VT</option>
                        <option value={"VA"}>VA</option>
                        <option value={"WA"}>WA</option>
                        <option value={"WV"}>WV</option>
                        <option value={"WI"}>WI</option>
                        <option value={"WY"}>WY</option>
                    
                    </select>
                    </div>
                    <div>
                    <select className="experience-select" onChange={onSelectChange} name="experience">
                        <option value={''}>Experience</option>
                        <option value={"Junior Position"}>Junior</option>
                        <option value={"Mid-Level Position"}>Mid-Level</option>
                        <option value={"Senior Position"}>Senior</option>
                    </select>
                    </div>
                    <div>
               
                </div>
            </div>
         
            <div className="card-container">
                {jobs.map((job, index) => {
                    // console.log(job);
                    return (
                        <JobCard key={index} id={job.job_id} title={job.title} company={job.companyName} location={`${job.location_city}, ${job.location_state_province}`} /> 
                        // pay_exact={user.pay_exact}
                    )
                })}
            </div>
            {/* </InfiniteScroll> */}
        </StyledLoader>
    )
}

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;