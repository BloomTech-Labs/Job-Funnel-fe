import React, { useState, useEffect } from 'react';
import axiosWithAuth from "../../../utils/axiosWithAuth"
import Modal from 'react-modal';
import { Link } from "react-router-dom";
import { connect } from "react-redux"
import heart from './../../../images/heartEmpty.svg'
import heartFull from './../../../images/heartFull.svg'
import { updateSaved, deleteSaved } from '../../../redux-store/App/AppActions'
import Accordion from './Accordion'

function JobCard(props) {
    console.log('PROPS', props)
    //variables
    const user_id = props.currentUser.id
    const job_id = props.id;
    const [modal, setModal] = useState(false)
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

    console.log('TOGGLE', props.toggle)

    //the card display/stylings
    return (
        <div className="jobCard">
            {/* <div className="card-header">
                <p className="company-name">{props.company}</p>

            </div>
            <div className="card-text">
                <div className="card-info">
                    <h3>{props.title}</h3>
                </div>
                <div className='jobButtons' >
                <Link to={`/Dashboard/Job/${props.id}`}>
                    <button>Apply</button>
                </Link>
            </div>
            </div>
             */}
            <Accordion/>
        </div>
    )
}


const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
        savedArray: state.AppReducer.saved
    }
}

export default connect(mapStateToProps, { updateSaved, deleteSaved })(JobCard)