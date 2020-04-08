import React, { useState, useEffect } from 'react'

import JobCard from './JobCard.js';

import searchAPI from '../../../utils/searchAPI';
import { useLocation } from "react-router-dom"

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

export default function SuggestedJobs() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(false);

    const location = useLocation();

    const [search, setSearch] = useState({
        title: '',
        job_type: '',
        city: '',
        state_province: '',
        experience: ''
    });

    const onSelectChange = e => {
        console.log(e)
        const selectValue = e.target.value;
        const selectInputName = e.target.name;
        setSearch({ ...search, [selectInputName]: selectValue, job_type: e.target.value ? selectValue : undefined });
        console.log('set value', search)
    }


    const onSelectChange = e => {
        console.log(e)
        const selectValue = e.target.value;

        const selectInputName = e.target.name;
        setSearch({ ...search, [selectInputName]: selectValue, job_type: e.target.value ? selectValue : undefined });
        console.log('set value', search)
    }

    const handleSubmit = event => {
        console.log('thisisseacrgh,', search)
        event.preventDefault();
        setLoading(true)
        searchAPI().get('/search', {
            params: search,
        }).then((response) => {
            console.log(response)
            setJobs(response.data.responses);
            setLoading(false)


        })
            .catch(err => {
                console.log(err)
                setLoading(false)
            })
    }

    return (
        <>
            <div className="filter-class ">
                <form className="search-div" onSubmit={onSelectChange}>
                    <div className='search-div animated flipInX faster' > <input className="search-bar"
                        type="text"
                        name="title"
                        placeholder="Title"
                        tabIndex="0"
                        onChange={onSelectChange}
                    /></div>


                    <div className='search-div animated flipInX fast' > <select className="search-bar" onChange={onSelect} name="job_type" value={search.job_type}
                    >
                        <option selected value="coconut">Job Type</option>
                        <option value="fulltime">Full-time</option>
                        <option value="partime-">Part-Time</option>
                        <option value="contract">Contract</option>
                        <option value="temporary">Temporary</option>
                        <option value="internships">Internships</option>
                    </select>
                    </div>

                    <div className='search-div animated flipInX fast' > <select className="search-bar" name="experience" onChange={onSelectChange}
                    >
                        <option selected value="coconut">Experience</option>
                        <option value="internship">Internship</option>
                        <option value="entry">Entry</option>
                        <option value="mid">Mid-level</option>
                        <option value="senior">Senior</option>
                    </select>
                    </div>


                    <div className='search-div animated flipInX fast' > <input className="search-bar"
                        type="text"
                        name="city"
                        placeholder="Enter City"
                        tabIndex="0"
                        onChange={onSelectChange}
                        handleSubmit={onSelectChange}
                    /></div>
                    <div className='search-div animated flipInX  ' ><input className="search-bar"
                        type="text"
                        name="state_province"
                        placeholder="Enter State"
                        tabIndex="0"
                        onChange={onSelectChange}
                        handleSubmit={onSelectChange}
                    /></div>


                    <button className="animated flipInX delay-1s faster" onClick={handleSubmit}>Submit</button>
                </form>
            </div>
            <StyledLoader active={loading} spinner text='Searching for jobs...'>
                {/* on the div below: if loading is false and jobs.length 
                <1 , then render card-container message. if jobs.length 1<= x < 4, then render card-container-vh. else, render card container  */}
                <div className={(loading === false && jobs.length < 1 ? "card-container-message" : (jobs.length >= 1 && jobs.length < 4 ? "card-container-vh" : 'card-container'))}>
                    {/* if cards are not loading AND the job obj is empty, then:  */}
                    {(loading === false && jobs.length < 1 ? <div className='use-search  animated flipInX ' ><h2>Use the search above to find your next job!</h2></div> :
                        jobs.map((job, index) => {
                            // console.log(job);
                            return (
                                <JobCard key={index} id={job.job_id} title={job.title} description={job.description} company={job.company_name} image={job.company_logo_url} location={`${job.location_city}, ${job.location_state_province}`} />
                            )
                        }))}
                </div>
            </StyledLoader>
        </>

    )
}

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;