import React, { useState, useEffect } from 'react'

import axiosWithAuth from "../../../utils/axiosWithAuth"

import { connect } from "react-redux"
import { updateSaved, deleteSaved } from '../../../redux-store/App/AppActions'
import styled from "styled-components";
import { Link, withRouter } from "react-router-dom";
import { Loading } from './../Loading'


//Component that makes up the Saved Jobs page on site
function SavedJobs(props) {

    console.log('props in savedjobs', props)
    const [save, setSave] = useState([])
    const [loading, setLoading] = useState(false);

    const id = props.currentUser.id

    // This function loads saved jobs for a user.
    const loadSaves = () => axiosWithAuth().get(`/saved/${id}`)
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


    //axiosWithAuth is getting the saved id's that are made on the SuggestedJobs component whenever you click the save button
    useEffect(() => {
        setLoading(true);
        loadSaves();
    }, [id, props.saved])

    //deletes the selected saved job
    const handleDelete = (job_id) => {
        setLoading(true)
        props.deleteSaved(job_id);
    }

    //pushes saved jobs to here, and also returns nothing is available if you haven't saved any jobs, with a link back to the dashboard.
    const JobDetails = (job_id) => {
        setTimeout(() => {
            props.history.push(`/Dashboard/Job/${job_id}`)
        }, 100)
    }

    //if loading is happening, then only return loader
    if (loading === true) {
        return (
            <Loading />
        )
    }
    // else, return this 
    return (
        <div className="saved-jobs-main">
            <h1>Saved Jobs</h1>
            {(save.length < 1 ?
                //if object is empty, render empty message 
                <div className="empty-jobs">
                    <div><p>Nothing here yet...Save a job in Dashboard to continue!
                </p></div>
                </div> : save.map((e) => {
                    return (
                        <div key={id} className="card-saved-jobs" >
                            <h3>{e.companyName}</h3>
                            <p>{e.description.slice(0, 50)}...</p>
                            <div className="saved-buttons">
                                <button onClick={() => handleDelete(e.job_id)}>Unsave</button>
                                <button onClick={() => JobDetails(e.job_id)}>More Info</button>
                            </div>
                        </div>
                    )

                }))}
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
        saved: state.AppReducer.saved
    }
}
export default withRouter(connect(mapStateToProps, {updateSaved, deleteSaved})(SavedJobs));

/* const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`; */

