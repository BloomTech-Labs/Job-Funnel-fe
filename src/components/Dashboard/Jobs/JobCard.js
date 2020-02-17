import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import axiosWithAuth from "../../../utils/axiosWithAuth"
import JobDetails from './JobDetails';

import {Link} from "react-router-dom";

function JobCard(props) {
    // const userID = props.currentUser.id;
    const job_id = props.id;
    const jobStatus = 'saved';



    // const [saved, setSaved] = useState({
    // user_id: user_id,
    // job_id: jobId,
    // status: "saved"
    // })
    const [history, setHistory] = useState({
        // user_id: userID,
        jobID: job_id,
        jobStatus: "saved"     
    });

    // //#region CONSOLE LOG
    //  console.log('user id', user_id);
    //  console.log("do i have props.match.params.id??", props)
    //  console.log('job id?', job_id)
    //  console.log('Current User', props.currentUser)
    // //#endregion 
    
    // const handleSave = () => {
        // console.log('saved ', saved)
        // axiosWithAuth().post('/saved/', saved)
        // .then(response => {
        //     // console.log('handle save job response', response.data)
        //     // console.log('response id', response.data.id)
        //     setSaved({...saved})
        //     // console.log('saved', saved)
            
        // })
        // .catch(error => {
        //     console.error(error)
        // })
    // }

    // console.log('MANAGER', window.sessionStorage)
    const pushHistory = () => {
        axiosWithAuth().post('/history/', history)
            .then(res => {
                console.log('handle history response', res.data)
                // console.log('response id', response.data.id)
                setHistory({...history}, res.data);
                // console.log('saved', saved)
                
            })
            .catch(error => {
                console.error(error);
            })
    };


    return (
        <div className="jobCard">
            <div style={{display: 'flex', justifyContent: 'space-between', margin: '10px 15px', }}> 
                <h4>Your Skills match 6/7</h4>
            </div>
            <div className="card-image">
                <img className="image" src="http://pngimg.com/uploads/microsoft/microsoft_PNG18.png"/>
            </div>
            <div className="card-text">
                <h3>{props.title}</h3>
                <p>{props.company}</p>
                <span>📍 {props.location}</span>
            </div>
            <div className='jobButtons' >
                {/* <button onClick={handleSave}>Save</button> */}
                <Link to={`/Dashboard/Job/${props.id}`}>
                <button onClick={pushHistory}>View</button>
                </Link>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log('mapstatetoprops: ', state);
    return {
        currentUser: state.AppReducer.currentUser,
    }
  }
  
  export default connect(mapStateToProps, {})(JobCard)
