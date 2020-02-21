import React, {useState, useEffect} from 'react';
import axiosWithAuth from "../../../utils/axiosWithAuth"

import { Link } from "react-router-dom";
import { connect } from "react-redux"

function JobCard(props) {

    //variables
    const user_id = props.currentUser.id
    const job_id = props.id;

    const [toggle, setToggle] = useState(false)
    const [applytoggle, setApplytoggle] = useState(false)
    
    //state for saved status
    const [saved, setSaved] = useState({
        user_id: user_id,
        job_id: job_id,
        status: "saved"
    })

    //state for applied status
    const [applied, setApplied] = useState({
        user_id: user_id,
        job_id: job_id,
        status: "applied"
    })

    const handleApply = () => {
            axiosWithAuth().post('/saved/', applied)
            .then(res => {
                console.log('handle save job response', res.data)
                setApplied({...applied})
                setApplytoggle(true)
            })
            .catch(error => {
                console.error(error)
            })
    }

    const handleSave = () => {
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
        } else if (applytoggle === false) {
            axiosWithAuth().post('/saved/', applied)
            .then(res => {
                console.log('handle save job response', res.data)
                setApplied({...applied})
                setApplytoggle(true)
            })
            .catch(error => {
                console.error(error)
            })
        } else if(applytoggle === true ) {
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

    return (
        <div className="jobCard">
            <div className='jobButtons-top'> 
            {(applytoggle === false ? <button onClick={handleApply}>Save as Applied</button> : <p style={{textAlign: 'center'}}>Saved as applied!👍🏼 </p> )}
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
                {(toggle === false ? <button onClick={handleSave}>Save</button> : <button onClick ={handleSave} style={{color: 'white', backgroundColor: 'green'}}>Unsave</button> )}
                <Link to={`/Dashboard/Job/${props.id}`}>
                    <button>View</button>
                </Link>
            </div>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
    }
  }
  
  export default connect(mapStateToProps, {})(JobCard)


