import React, { useState, useEffect } from 'react'

import axiosWithAuth from "../../../utils/axiosWithAuth"

import { connect } from "react-redux"
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

// applied jobs component allows a spot for you to pretty much save jobs that you've applied for. 
function AppliedJobs(props) {

    const [apply, setApply] = useState([])
    const [loading, setLoading] = useState(false);

    const id = props.currentUser.id

    // get request in order to get the job by the saved id
    useEffect(() => {
        setLoading(true);
        axiosWithAuth().get(`/saved/${id}`)
            .then(res => {
                console.log('response from applied jobs', res.data)
                //below -> filtering for items in the array that have the status coded in as applied 
                let AppliedCopy = res.data.filter((e) => e.status === "applied")
                setApply(AppliedCopy)
                setLoading(false);
   
            })
            .catch(error => {
                console.error(error.message)
                setLoading(false);
            })
    }, [id])

    const JobDetails = (job_id) => {
        setTimeout(() => {
            props.history.push(`/Dashboard/Job/${job_id}`)
        }, 100)  
    }
    // delete request to remove the jobs that you don't want on your applied jobs page.
    const handleDelete = (job_id) => {
        setLoading(true)
        axiosWithAuth().delete(`/saved/${job_id}`)
            .then(res => {
                let AppliedCopy = apply.filter((e) => e.job_id !== job_id)
                console.log('erased job from saved table', res.data)
                setLoading(false)
                setApply(AppliedCopy)
            })
            .catch(error => {
                console.error(error)
                setLoading(false)
            })
    }

    //if loading is happening, then only return loader
    if(loading === true ) {
        return (
            <StyledLoader active={loading} spinner text='Loading...'/>
        )
    } 
     // else, return this 
    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            {/* if save.length 1>= x < 3, then assign css class saved-jobs-small */}
            <div className={(apply.length === 1 ? "saved-jobs-single" : (apply.length === 2 ? "saved-jobs-small" : "saved-jobs-main"))}>
            {(apply.length < 1 ? 
            //if object is empty, render empty message  
            <div className="empty-jobs">
                <div className="animated flipInX"><h1>Click "Saved as Applied" on any Job Detail page to save your applied jobs!
                </h1></div>
            </div> : apply.map((e) => {
                    return (
                        <div key={id} className="card-saved-jobs">
                            <h3>{e.companyName}</h3>
                            <h5>📍{e.city} {e.stateOrProvince}, {e.country}</h5>
                            <p> Overview <br></br>{e.description.slice(0, 250)}...</p>
                            <div className="saved-buttons">
                                <button onClick={() => handleDelete(e.job_id)}>Erase from Applied</button>
                                <button onClick={() => JobDetails(e.job_id)}>More Info</button>
                            </div>
                        </div>
                    )
                }))}
            </div>
        </StyledLoader>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
    }
}
export default connect(mapStateToProps, {})(AppliedJobs)

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;