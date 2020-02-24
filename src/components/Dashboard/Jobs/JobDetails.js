import React, { useState, useEffect } from 'react'
import ReactMarkdown from 'react-markdown'

import axiosWithAuth from "../../../utils/axiosWithAuth.js"
import { connect } from "react-redux"


    function JobDetails(props) {

    const user_id = props.currentUser.id
    const job_id = props.match.params.id;

    const [details, setDetails] = useState({});
    const [description, setDescription] =useState({})
    const [applytoggle, setApplytoggle] = useState(false)
    const [applied, setApplied] = useState({
        user_id: user_id,
        job_id: job_id,
        status: "applied"
    }) 



useEffect(()=> {
    axiosWithAuth().get(`/jobs/${job_id}`)
        .then(response => {
            console.log('job details axios response', response.data);
            setDetails(response.data);
            setDescription(response.data.description)
        })
        .catch(err => console.error(err))
}, []);

 const handleApply = () => {
    if(applytoggle === false){
        axiosWithAuth().post('/saved/', applied)
        .then(res => {
            console.log('handle save job response', res.data)
            setApplied({...applied})
            setApplytoggle(!applytoggle)
        })
        .catch(error => {
            console.error(error)
        })
    } else {
        axiosWithAuth().delete(`/saved/${job_id}`)
                .then(res => {
                    console.log('erased job from saved table?', res.data)
                    setApplytoggle(false)
                    setApplied({...applied})
                })
                .catch(error => {
                    console.error(error)
                })
            }
    }


    //Gives the posted date
    const postedDate = Date(details.post_date_utc)

    //Styling for the Job Details Component Page
    return (
        <div className= {(description.length < 2000 ?"job-details-container-2" : "job-details-container")}>
        <div className="deets-apply-button">
            <button>Apply to Job</button>
            {(applytoggle === false ? <button onClick={handleApply}> Save as Applied</button> : <button onClick={handleApply}>Remove from Applied</button> )}
        </div>
        <div className="deets-div">
            <h2>{details.title}</h2>
            <p className="company-name">{details.companyName}</p>
            <p className="job-location">{details.city} {details.stateOrProvince}</p>
            <p className="job-posting-date">{postedDate}</p>
            <a className="job-listing-link" href={details.testexternal_url}>{details.testexternal_url}</a>
        </div>
        <div className="desc-div" >
        <p className="job-description" ><ReactMarkdown source={details.description} /></p>
        </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
    }
  }
  
  export default connect(mapStateToProps, {})(JobDetails)

