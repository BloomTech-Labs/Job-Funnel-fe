import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';



function Profile(props) {
    const user = props.currentUser

    return (
        <div className="main">
            <div className="profile-container">
                <div className="profile-header">
                    <div className="profile-summary">
                        <div className="image-name-title">
                            <img className="main-profile-image" src={user.profile_img} />
                            <h3>{user.first_name} {user.last_name}</h3>
                            <h4>{user.user_type}</h4>
                        </div>
                        <div className="about-me">
                            <h3>About Me</h3>
                            <p>International Man of Mystery. "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""    
                            </p>
                        <h2>Education: {user.education}</h2>
                        </div>
                        {/* <h3>{userInfo.firstName} {userInfo.lastName}</h3> */}
                    </div>
                </div>
                <div className="main-profile">
                    <div className="profile-body-left">
                        <div className="resume">
                            <h3>Professional Links</h3>
                            <p>Resume: {user.resume}</p>
                            <h3>Artifacts</h3>
                            <h4>Github: </h4>
                            <h4>Portfolio: </h4>
                            <p>Artifacts will go under resume as well</p>
                        </div>
                    </div>
                    <div className="profile-body-right">
                        <div className="skills">
                            <h2>Skills:</h2>
                            <p>This is where the skills would be listed</p>
                        </div>
                        <div className="job-pref">
                            <h2>Job Preferences</h2>
                            <p>This is where the job preferences will go</p>
                        </div>
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
