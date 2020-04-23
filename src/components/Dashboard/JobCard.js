import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { updateSaved, deleteSaved } from '../../redux-store/App/AppActions';
import { connect } from "react-redux";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartOutline} from '@fortawesome/free-regular-svg-icons';
import { states } from '../../data';
import heart from './../../images/heartEmpty.svg';
import heartFull from './../../images/heartFull.svg';

const JobCard = ( props ) => {
    const [word, setWord] = useState("more");
    const [open, setOpen] = useState(false);
    const [jobDetails, setJobDetails] = useState({});

    useEffect(() => {
        setJobDetails(props.jobDetailsLookup[props.job.job_id.toString()]);
    }, [props.savedArr])

    const handleSaveJob = (event) => {
        console.log('EVENT: ', event)
        if (!props.savedLookup.hasOwnProperty(props.job.job_id)) {
            let job = {
                user_id: props.currentUser.id,
                job_id: props.job.job_id,
                status: "saved"
            }
            if(!event.detail || event.detail == 1){//activate on first click only to avoid hiding again on multiple clicks
                // code here. // It will execute only once on multiple clicks
                props.updateSaved(job, props.currentUser.id);
              }
            // props.updateSaved(job, props.currentUser.id);
        } else {
            props.deleteSaved(props.job.job_id);
        }
    }

    const handleTextExpand = () => {
        if (!open) {
            setOpen(true)
            setWord("less")
        } else {
            setOpen(false)
            setWord("more")
        }
    }

    return (
        <div className='job-card' style={{height: `${open ? 'auto' : '150px'}`}}>
            <div className="first-row">
                <div className="company">{props.job.company_name}</div>
                <div className="location"><spin style={{marginRight: '2px'}}>{props.job.location_city}{`${props.job.location_state_province !== "" && props.job.location_state_province !== "Dc" && props.job.location_state_province !== "DC" && props.job.location_city !== "" ? "," : ""}`}</spin><spin>{states[props.job.location_state_province]}</spin></div>
                {/* <FontAwesomeIcon onClick={handleSaveJob} style={{width: '20px', height: '20px', cursor: 'pointer', color: '#EC3844', marginLeft: 'auto'}} icon={props.savedLookup.hasOwnProperty(props.job.job_id) ?  faHeart : heartOutline} size='lg'/>  */}
                {props.savedLookup.hasOwnProperty(props.job.job_id) ? <img src={heartFull} onClick={handleSaveJob} style={{width: '20px', height: '20px', cursor: 'pointer', marginLeft: 'auto'}}/> : <img src={heart} onClick={handleSaveJob} style={{width: '20px', height: '20px', cursor: 'pointer', marginLeft: 'auto'}}/>}
            </div>
            <div className="title">{props.job.title}</div>
            <div className="content">
               {jobDetails.description }
            </div>
            <div className="bottom-row">
                <div style={{display: 'flex', margin: '0 auto'}}>
                    <div>Read {word}</div>
                    <FontAwesomeIcon onClick={handleTextExpand} style={{width: '16px', height: '16px', cursor: 'pointer', color: 'gray', marginLeft: '3px', marginTop: '2px'}} icon={open ? faChevronUp : faChevronDown} size='lg'/> 
                </div>
                <button className="apply-btn">Apply</button>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        currentUser: state.AppReducer.currentUser,
        savedArr: state.AppReducer.saved,
        savedLookup: state.AppReducer.savedLookup,
        appliedLookup: state.AppReducer.appliedLookup,
        toggle: state.AppReducer.toggle
    }
}

export default connect(mapStateToProps, { updateSaved, deleteSaved })(JobCard);