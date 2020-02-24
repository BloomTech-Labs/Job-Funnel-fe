import React, { useState, useEffect } from 'react'

import axiosWithAuth from "../../../utils/axiosWithAuth"

import { connect } from "react-redux"
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

    function AppliedJobs(props) {
        
    const [apply, setApply] = useState([])
    const [loading, setLoading] = useState(false);
    const [note, setNote] = useState("")

    const id = props.currentUser.id

    
 useEffect(() => {
    setLoading(true);
    axiosWithAuth().get(`/saved/${id}`)
    .then(res => {
        console.log('response from applied jobs', res.data)
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
     props.history.push(`/Dashboard/Job/${job_id}`)
 }

 const handleDelete = (job_id) => {
    setLoading(true)
    axiosWithAuth().delete(`/saved/${job_id}`)
       .then(res => {
               let AppliedCopy = apply.filter((e)=> e.job_id !== job_id)
               console.log('erased job from saved table', res.data)
               setLoading(false)
               setApply(AppliedCopy)
           })
           .catch(error => {
               console.error(error)
                setLoading(false)
           })
}

    if(apply.length < 1){
        return (
            <div className="empty-jobs">
                <h1>Click "Saved as Applied" in <Link to ="/Dashboard">Dashboard</Link> to save your applied jobs!</h1>
            </div>
        )
    }
    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <div className="saved-jobs-main">
                {apply.map((e) => {
                    return (
                        <div key={id} className="card-saved-jobs">
                            <h3>{e.companyName}</h3>
                            <h5>📍{e.city} {e.stateOrProvince}, {e.country}</h5>
                            <p> Overview <br></br>{e.description.slice(0,250)}...</p>
                            <div className="saved-buttons">
                                <button onClick={()=> handleDelete(e.job_id)}>Erase from Applied</button>
                                <button onClick={()=> JobDetails(e.job_id) }>More Info</button>
                            </div>
                        </div>
                    )
                })}
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
