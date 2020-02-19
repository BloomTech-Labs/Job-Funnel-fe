import React, {useState, useEffect} from 'react';
<<<<<<< HEAD
import { connect } from 'react-redux';
import axiosWithAuth from "../../../utils/axiosWithAuth"
import JobDetails from './JobDetails';
=======
import axiosWithAuth from "../../../utils/axiosWithAuth"
>>>>>>> c8b05dab7038af0ba82617b971bcd79903fc61f8

import { Link } from "react-router-dom";
import { connect } from "react-redux"

import SavedJobs from "./SavedJobs.js"

function JobCard(props) {
<<<<<<< HEAD
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
=======
    // console.log('job id?', props)

    const user_id = props.currentUser.id
    const job_id = props.id;

    const [saved, setSaved] = useState({
        user_id: user_id,
        job_id: job_id,
        status: "saved"
    })
>>>>>>> c8b05dab7038af0ba82617b971bcd79903fc61f8

    const [toggle, setToggle] = useState(false)

    const handleSave = () => {
        // console.log('saved ', saved)
        if(toggle === false){
            axiosWithAuth().post('/saved/', saved)
            .then(res => {
                console.log('handle save job response', res.data)
                setSaved({...saved})
                setToggle(true)
            })
            .catch(error => {
                console.error(error)
            })
        } else if (toggle === true) {
            axiosWithAuth().delete(`/saved/${job_id}`)
            .then(res => {
                console.log('erased job from saved table?', res.data)
                setToggle(false)
                setSaved({...saved})
            })
            .catch(error => {
                console.error(error)
            })
        }
        
    }

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
<<<<<<< HEAD
            <div className='jobButtons' >
                {/* <button onClick={handleSave}>Save</button> */}
                <Link to={`/Dashboard/Job/${props.id}`}>
                <button onClick={pushHistory}>View</button>
=======
            <div className='jobButtons' > 
                {(toggle === false ? <button onClick={handleSave}>Save</button> : <button onClick={handleSave}>Unsave</button> )}
                <Link to={`/Dashboard/Job/${props.id}`}>
                    <button>View</button>
>>>>>>> c8b05dab7038af0ba82617b971bcd79903fc61f8
                </Link>
            </div>
        </div>
    )
}

<<<<<<< HEAD
const mapStateToProps = state => {
    // console.log('mapstatetoprops: ', state);
=======

const mapStateToProps = state => {
>>>>>>> c8b05dab7038af0ba82617b971bcd79903fc61f8
    return {
        currentUser: state.AppReducer.currentUser,
    }
  }
  
  export default connect(mapStateToProps, {})(JobCard)
<<<<<<< HEAD
=======


>>>>>>> c8b05dab7038af0ba82617b971bcd79903fc61f8
