import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { faHeart as heartOutline} from '@fortawesome/free-regular-svg-icons';
import { states } from '../../data';

const JobCard = ( { job } ) => {
    const [word, setWord] = useState("more");
    const [open, setOpen] = useState(false);

    const handleSaveJob = () => {

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
                <div className="company">{job.company_name}</div>
                {/* <div className="title">{job.title}</div> */}
                <div className="location"><spin style={{marginRight: '2px'}}>{job.location_city}{`${job.location_state_province !== "" && job.location_state_province !== "Dc" && job.location_state_province !== "DC" && job.location_city !== "" ? "," : ""}`}</spin><spin>{states[job.location_state_province]}</spin></div>
                <FontAwesomeIcon onClick={handleSaveJob} style={{width: '20px', height: '20px', cursor: 'pointer', color: '#EC3844', marginLeft: 'auto'}} icon={heartOutline} size='lg'/> 
            </div>
            <div className="title">{job.title}</div>
            <div className="content">
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
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

export default JobCard;