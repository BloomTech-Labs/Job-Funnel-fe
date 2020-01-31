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
        <Link to="/dashboard"><button>Back to Dashboard</button></Link>
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
          </div>
        </div>
        <div className="profile-body-right">
          <div className="skills">
            <h3>Skills</h3>
            <p>This is where the skills would be listed</p>
          </div>
        </div>
        <div className="container-two">                   
            <div className="job-pref">
              <h3>Job Preferences</h3>
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
