import React, { useState, useEffect } from 'react'

import JobCard from './JobCard.js';

import searchAPI from '../../../utils/searchAPI';
import { useLocation } from "react-router-dom"

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";



export default function SuggestedJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);
    // const [submit, setSubmit]= useState(false)

    const location = useLocation();


    
    const [search, setSearch] = useState({
        title: '',
        city: '',
        state_province: '',
        experience: ''
    });



    const onSelectChange = e => {
        const selectValue = e.target.value;
        const selectInputName = e.target.name;
        setSearch({ ...search, [selectInputName]: selectValue ? selectValue : undefined });
        console.log('set value', search)
    }
       const handleSubmit = event => {
            event.preventDefault();
            searchAPI().get('/search', {
            params: search,
        }).then((response) => {
            setJobs(response.data.responses);
            // console.log({ response })
            // console.log('ok', search)

        })}
            
    return (
        <StyledLoader active={loading} spinner text='Loading...'>



            <div className="filter-class animated flipInX delay-1s">
               
                   
                    <div> <input className="search-bar"
                        type="text"
                        name="title"
                        placeholder="Key Words"
                        tabIndex="0"
                        onChange={onSelectChange}
                        handleSubmit={onSelectChange}
                    /></div>
                    <div > <input className="search-bar"
                        type="text"
                        name="city"
                        placeholder="Enter City"
                        tabIndex="0"
                        onChange={onSelectChange}
                        handleSubmit={onSelectChange}
                    /></div>
                    <div ><input className="search-bar"
                        type="text"
                        name="state_province"
                        placeholder="Enter State"
                        tabIndex="0"
                        onChange={onSelectChange}
                        handleSubmit={onSelectChange}
                    /></div>

                    <div><input className="search-bar"
                        type="text"
                        name="experience"
                        placeholder="Enter Experience"
                        tabIndex="0"
                        onChange={onSelectChange} 
                        handleSubmit={onSelectChange}
                    /></div>
                    <div ><button className='search-parent'  onClick={handleSubmit}>Submit</button></div>
                      
                
               
            </div>

            <div className="card-container">
                {jobs.map((job, index) => {
                    // console.log(job);
                    return (
                        <JobCard key={index} id={job.job_id} title={job.title} description={job.description} company={job.companyName} location={`${job.location_city}, ${job.location_state_province}`} />


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