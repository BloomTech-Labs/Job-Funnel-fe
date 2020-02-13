import React, {useState, useEffect} from 'react';
import axiosWithAuth from "../../../utils/axiosWithAuth"

import { Link } from "react-router-dom";
import { connect } from "react-redux"


function JobCard(props) {
    console.log('job id?', props)


    const user_id = props.currentUser.id
    const job_id = props.id;

    const [saved, setSaved] = useState({
        user_id: user_id,
        job_id: job_id,
        status: "saved"
    })

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
                <h3>{jobs.title}</h3>
                <p>{jobs.company}</p>
                <span>📍 {jobs.location}</span>
            </div>

            <div className='jobButtons' > 
                {(toggle === false ? <button onClick={handleSave}>Save</button> : <button onClick={handleSave}>Unsave</button> )}
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



