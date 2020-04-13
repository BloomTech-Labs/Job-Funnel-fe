import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../../../utils/axiosWithAuth"
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import heart from './../../../images/heartEmpty.svg'
import heartFull from './../../../images/heartFull.svg'

function JobCard(props) {
    console.log('PROPS', props)
    //variables
    const user_id = props.currentUser.id
    const job_id = props.id;
    const [modal, setModal] = useState(false)
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


    //handles save, sends the saved jobs to the saved endpoint.
    const handleSave = () => {
        if (toggle === false) {
            axiosWithAuth().post('/saved/', saved)
                .then(res => {
                    console.log('handle save job response', res.data)
                    setSaved({ ...saved })
                    setToggle(true)
                })
                .catch(error => {
                    console.error(error)
                })
            //Delete save
        } else if (toggle === true) {
            axiosWithAuth().delete(`/saved/${job_id}`)
                .then(res => {
                    console.log('erased job from saved table?', res.data)
                    setToggle(false)
                    setSaved({ ...saved })
                })
                .catch(error => {
                    console.error(error)
                })
        }

    }


    //the card display/stylings
    return (
        <div className="jobCard">
            <div className="card-header">
                <p className="company-name">{props.company}</p>

                {/*    {(toggle === false ? <button onClick={handleSave}>Save</button> : <button onClick={handleSave} style={{ color: 'white', backgroundColor: 'green' }}>Unsave</button>)}
 */}
                {(toggle === false ? <button onClick={handleSave}><img src={heart} /> </button> : <button onClick={handleSave}> <img src={heartFull} /></button>)}


            </div>
            <div className="card-text">


                <div className="card-info">
                    <h3>
                        {props.title.length > 40 ? `${props.title.slice(0, 40)} + ...` : props.title}
                    </h3>

                </div>

            </div>
            <div className='jobButtons' >
                <Link to={`/Dashboard/Job/${props.id}`}>
                    <button>Apply</button>
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


