<<<<<<< HEAD
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
=======
import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth.js";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

function Profile(props) {
  const user = props.currentUser;

  const url =
    "https://www.rollingstone.com/wp-content/uploads/2019/12/5879708cW.jpg?resize=900,600&w=450";

  return (
    <div className="container-profile">
      <div className="back-button">
        <Link to = "/dashboard">
            <button>Back to Dashboard</button>
        </Link>
      </div>
      <div className="image-container">
        <img className="profile-image1" src={url} />
        <div className="image-content">
          <h3>
            {user.first_name} {user.last_name}
          </h3>
          <h4>{user.email}</h4>
        </div>
        <button>Edit</button>
      </div>
      <div className="profile-body-container">
                        <div className="about-containe">
                        <div className="about-me">
                            <h3>About Me</h3>
                            <p>{user.bio} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sit amet faucibus velit, id maximus sem. Curabitur ac justo non lectus vehicula pretium. Vivamus sed nulla ut augue condimentum lobortis. Maecenas pharetra, enim nec mollis condimentum, neque libero euismod mi, sed faucibus nisl ligula ac lectus. </p>
                        </div>
                        </div>
                   
                    <div className="container-one">   
                      <div className="education"> 
                            <h4>Education</h4>
                            <p>{user.education}Lambda School</p>
>>>>>>> 0f5292b0ae2109594512d6406eac0fe9dcb2fc6c
                        </div>
                    </div>
                    <div className="profile-body-right">
                        <div className="skills">
<<<<<<< HEAD
                            <h2>Skills:</h2>
                            <p>This is where the skills would be listed</p>
                        </div>
                        <div className="job-pref">
                            <h2>Job Preferences</h2>
=======
                            <h3>Skills</h3>
                            <p>This is where the skills would be listed</p>
                        </div>
                    </div>
                    <div className="container-two">                   
                    <div className="job-pref">
                            <h3>Job Preferences</h3>
>>>>>>> 0f5292b0ae2109594512d6406eac0fe9dcb2fc6c
                            <p>This is where the job preferences will go</p>
                        </div> 

                        <div className="resume">
                            <h3>Artifacts</h3>
                            <h4>Github: </h4>
                            <p>Resume: {user.resume}</p>
                            <h4>Portfolio: </h4>
                            <p>Artifacts will go under resume as well</p>
                        </div>
                    </div>
<<<<<<< HEAD
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
=======
                    
        </div>
    </div>
  );
}

const mapStateToProps = state => {
  // console.log('mapstatetoprops: ', state);
  return {
    currentUser: state.AppReducer.currentUser
  };
};

export default connect(mapStateToProps, {})(Profile);
>>>>>>> 0f5292b0ae2109594512d6406eac0fe9dcb2fc6c
