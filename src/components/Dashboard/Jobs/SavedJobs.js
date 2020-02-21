import React, { useState, useEffect } from 'react'

import axiosWithAuth from "../../../utils/axiosWithAuth"

import { connect } from "react-redux"
import styled from "styled-components";
import { Link } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";

    function SavedJobs(props) {
        
    console.log('props in savedjobs', props)
    const [save, setSave] = useState([])
    const [loading, setLoading] = useState(false);

    const id = props.currentUser.id

 useEffect(() => {
    setLoading(true);
    axiosWithAuth().get(`/saved/${id}`)
    .then(res => {
        console.log('response from save jobs', res.data)
        let SavedCopy = res.data.filter((e) => e.status === "saved")
        setSave(SavedCopy)
        setLoading(false);
    })
    .catch(error => {
        console.error(error.message)
        setLoading(false);
    })
 }, [id])


 const handleDelete = (job_id) => {
     setLoading(true)
     axiosWithAuth().delete(`/saved/${job_id}`)
        .then(res => {
                let SavedCopy = save.filter((e)=> e.job_id !== job_id)
                console.log('erased job from saved table', res.data)
                setLoading(false)
                setSave(SavedCopy)
            })
            .catch(error => {
                console.error(error)
                 setLoading(false)
            })
 }

 const JobDetails = (job_id) => {
     props.history.push(`/Dashboard/Job/${job_id}`)
 }

    if(save.length < 1){
        return (
            <div className="empty-jobs">
                <h1>Nothing here yet...Save a job in <Link to ="/Dashboard">Dashboard</Link> to continue!</h1>
            </div>
        )
    }

    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <div className="saved-jobs-main">
                {save.map((e) => {
                    return (
                        <div key={id} className="card-saved-jobs">
                            <h3>{e.companyName}</h3>
                            <h5>📍{e.city} {e.stateOrProvince}, {e.country}</h5>
                            <p> Overview <br></br>{e.description.slice(0,250)}...</p>
                            <div className="saved-buttons">
                                <button onClick={()=> handleDelete(e.job_id)}>Unsave</button>
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
  export default connect(mapStateToProps, {})(SavedJobs)

  const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;

