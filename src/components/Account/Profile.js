import React, { useState, useEffect } from 'react';
import axiosWithAuth from '../../utils/axiosWithAuth.js';
import { connect } from 'react-redux';

function Profile(props) {
    const user = props.currentUser;

    const url = "https://www.rollingstone.com/wp-content/uploads/2019/12/5879708cW.jpg?resize=900,600&w=450"

    return (
        <div className="container-profile">
                <div className="image-container">
                    <img className="profile-image1" src={url} />
                    <div className="image-content">
                        <h3>{user.first_name} {user.last_name}ber</h3>
                        <h4>{user.email}</h4>
                    </div>
                    <div>
                        <button>Edit</button>
                    </div>
                </div>
                <div className="profile-body-container">
                    <div className="about-me">
                        <h2>About Me</h2>
                        <p>{user.bio}</p>
                        <p>Education: {user.education}</p>
                    </div>
                    <div className="job-section">
                        <div className="job-pref">
                            <h3>Job Preferences</h3>
                            <p>This is where the job preferences will go</p>
                        </div>
                        <div className="skills">
                            <h3>Skills</h3>
                            <p>This is where the skills would be listed</p>
                        </div>
                    </div>
                    <div className="resume-container">
                        <div className="resume">
                                <h3>Artifacts</h3>
                                <h4>Github: </h4>
                                <p>Resume: {user.resume}</p>
                                <h4>Portfolio: </h4>
                                <p>Artifacts will go under resume as well</p>
                        </div>
                    </div>
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

export default connect(mapStateToProps, {})(Profile)

