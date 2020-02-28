import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

import axiosWithAuth from "../../../utils/axiosWithAuth.js"
import { connect } from "react-redux"


function JobDetails(props) {

    const user_id = props.currentUser.id
    const job_id = props.match.params.id;

    const [details, setDetails] = useState({});
    const [loading, setLoading] = useState(false);
    const [description, setDescription] = useState({})
    const [applytoggle, setApplytoggle] = useState(false)
    const [applied, setApplied] = useState({
        user_id: user_id,
        job_id: job_id,
        status: "applied"
    })


    // gets the job details for each job
    useEffect(() => {
        setLoading(true)
        axiosWithAuth().get(`/jobs/${job_id}`)
            .then(response => {
                console.log('job details axios response', response.data);
                setDetails(response.data);
                setDescription(response.data.description)
                setLoading(false)
            })
            .catch(err => console.error(err))
            
    }, []);

   
    // posts the jobs that you save to the save component page so that you can view all the jobs you save.
    const handleApply = () => {
        if (applytoggle === false) {
            axiosWithAuth().post('/saved/', applied)
                .then(res => {
                    console.log('handle save job response', res.data)
                    setApplied({ ...applied })
                    setApplytoggle(!applytoggle)
                })
                .catch(error => {
                    console.error(error)
                })
        } else {
            // delete jobs you save on the saved page
            axiosWithAuth().delete(`/saved/${job_id}`)
                .then(res => {
                    console.log('erased job from saved table?', res.data)
                    setApplytoggle(false)
                    setApplied({ ...applied })
                })
                .catch(error => {
                    console.error(error)
                })
        }
    }


    //Gives the posted date
    let date = new Date(details.post_date_utc);
    console.log('date', date)
    
    let dateMonth = (date.getUTCMonth()+ 1)
    let dateDay= date.getDate()
    let dateYear = date.getFullYear()
    
   
    //Styling for the Job Details Component Page
    if(loading === true){
        return (
            <StyledLoader active={loading} spinner text='Job Details...'/>
        )
    }
    return (
        <StyledLoader active={loading} spinner text='Job Details...'>
            <div className={(description.length < 750 ? "job-details-container-2" : "job-details-container")}>
                <div className="deets-apply-button">
                    {/* <button>Apply to Job</button> */}
                    {(applytoggle === false ? <button onClick={handleApply}> Save as Applied</button> : <button onClick={handleApply}>Remove from Applied</button>)}
                </div>
                <div className="deets-div">
                    <h2>{details.title}</h2>
                    <p className="company-name">{details.companyName}</p>
                    <p className="job-location">{details.city}, {details.stateOrProvince}</p>
                    <p className="job-posting-date">{dateMonth}-{dateDay}-{dateYear}</p>
                    <a className="job-listing-link" href={details.testexternal_url}>Link to Application</a>
                </div>
                <div className="desc-div" >
                    <p className="job-description" ><ReactMarkdown source={details.description} /></p>
                </div>
            </div>
        </StyledLoader>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
    }
}

export default connect(mapStateToProps, {})(JobDetails)

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;

