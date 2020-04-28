import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axiosWithAuth from "../../utils/axiosWithAuth";
import {
  updateSaved,
  deleteSaved,
  updateApplied,
} from "../../redux-store/App/AppActions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHeart,
  faChevronDown,
  faChevronUp,
} from "@fortawesome/free-solid-svg-icons";
import { faHeart as heartOutline } from "@fortawesome/free-regular-svg-icons";
import { states } from "../../data";
import heart from "./../../images/heartEmpty.svg";
import heartFull from "./../../images/heartFull.svg";
import Modal from "react-modal";

const ModalStyle = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    transition: "ease-in-out",
  },
  content: {
    backgroundColor: "white",
    top: "20%",
    marginBottom: "50px",
    /* 			overflowY: 'auto',
     */ left: "30%",
    right: "30%",
    width: "40vw",
    height: "auto",
    paddingBottom: "30px",
  },
};

const JobCard = (props) => {
  const [word, setWord] = useState("more");
  const [open, setOpen] = useState(false);
  const [jobDetails, setJobDetails] = useState({});
  const [modal, setModal] = useState(false);

  useEffect(() => {
    setJobDetails(props.jobDetailsLookup[props.job.job_id.toString()]);
  }, [props.savedArr]);

  const handleSaveJob = (event) => {
    if (!props.savedLookup.hasOwnProperty(props.job.job_id)) {
      let job = {
        user_id: props.currentUser.id,
        job_id: props.job.job_id,
        status: "saved",
      };
      if (!event.detail || event.detail == 1) {
        //activate on first click only to avoid hiding again on multiple clicks
        // code here. // It will execute only once on multiple clicks
        props.updateSaved(job, props.currentUser.id);
      }
    } else {
      props.deleteSaved(props.job.job_id);
    }
  };

  const handleAppliedJob = (event) => {
    if (!props.appliedLookup.hasOwnProperty(props.job.job_id)) {
      let job = {
        user_id: props.currentUser.id,
        job_id: props.job.job_id,
        status: "applied",
      };
      if (!event.detail || event.detail == 1) {
        //activate on first click only to avoid hiding again on multiple clicks
        // code here. // It will execute only once on multiple clicks
        props.updateApplied(job, props.currentUser.id);
        setModal(false);
      }
    }
  };

  const handleTextExpand = () => {
    if (!open) {
      setOpen(true);
      setWord("less");
    } else {
      setOpen(false);
      setWord("more");
    }
  };

  if (modal === true) {
    return (
      <Modal
        className="modal"
        isOpen={modal}
        onRequestClose={() => setModal(false)}
        style={ModalStyle}
      >
        <div className="close">
          <button onClick={() => setModal(false)}>X</button>
        </div>
        <div className="modal-content">
          <h2>
            Did you apply to the position of <span>{props.job.title}</span> at
            <span style={{ marginLeft: "5px" }}>{props.job.company_name}</span>?
          </h2>
          <div className="modal-buttons">
            <button
              onClick={handleAppliedJob}
              style={{ backgroundColor: "#a6daa6" }}
            >
              Yes
            </button>
            <button onClick={() => setModal(false)}>No</button>
          </div>
        </div>
      </Modal>
    );
  }

  return (
    <div className="job-card" style={{ height: `${open ? "auto" : "150px"}` }}>
      <div className="first-row">
        <div className="company">{props.job.company_name}</div>
        <div className="location">
          <spin style={{ marginRight: "2px" }}>
            {props.job.location_city}
            {`${
              props.job.location_state_province !== "" &&
              props.job.location_state_province !== "Dc" &&
              props.job.location_state_province !== "DC" &&
              props.job.location_city !== ""
                ? ","
                : ""
            }`}
          </spin>
          <spin>{states[props.job.location_state_province]}</spin>
        </div>
        {/* <FontAwesomeIcon onClick={handleSaveJob} style={{width: '20px', height: '20px', cursor: 'pointer', color: '#EC3844', marginLeft: 'auto'}} icon={props.savedLookup.hasOwnProperty(props.job.job_id) ?  faHeart : heartOutline} size='lg'/>  */}
        {props.savedLookup.hasOwnProperty(props.job.job_id) ? (
          <img
            src={heartFull}
            onClick={handleSaveJob}
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
              marginLeft: "auto",
            }}
          />
        ) : (
          <img
            src={heart}
            onClick={handleSaveJob}
            style={{
              width: "20px",
              height: "20px",
              cursor: "pointer",
              marginLeft: "auto",
            }}
          />
        )}
      </div>
      <div className="title">{props.job.title}</div>
      <div className="content">{jobDetails.description}</div>
      <div className="bottom-row">
        <div style={{ display: "flex", margin: "0 auto" }}>
          <div>Read {word}</div>
          <FontAwesomeIcon
            onClick={handleTextExpand}
            style={{
              width: "16px",
              height: "16px",
              cursor: "pointer",
              color: "gray",
              marginLeft: "3px",
              marginTop: "2px",
            }}
            icon={open ? faChevronUp : faChevronDown}
            size="lg"
          />
        </div>
        <Link
          to="/"
          target="_blank"
          onClick={(event) => {
            event.preventDefault();
            window.open(props.job.link);
            setModal(true);
          }}
        >
          <button
            className="apply-btn"
            style={{
              backgroundColor: `${
                props.appliedLookup.hasOwnProperty(props.job.job_id)
                  ? "#a6daa6"
                  : "#ec3944"
              }`,
            }}
          >{`${
            props.appliedLookup.hasOwnProperty(props.job.job_id)
              ? "Applied"
              : "Apply"
          }`}</button>
        </Link>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    currentUser: state.AppReducer.currentUser,
    savedArr: state.AppReducer.saved,
    savedLookup: state.AppReducer.savedLookup,
    appliedLookup: state.AppReducer.appliedLookup,
    toggle: state.AppReducer.toggle,
  };
};

export default connect(mapStateToProps, {
  updateSaved,
  deleteSaved,
  updateApplied,
})(JobCard);
