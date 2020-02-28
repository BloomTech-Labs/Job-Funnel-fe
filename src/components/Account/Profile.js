import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import styled from 'styled-components';


import { validateInputs, isValidPassword } from '../../utils/AppUtils.js'
import { updateUser, deleteProfilePicture, updateProfilePicture } from '../../redux-store/App/AppActions.js';
import ProfilePicture from "./ProfilePicture.js"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faTwitter, faFacebook } from '@fortawesome/free-brands-svg-icons'


function Profile(props) {
  // #region Local State
  const [loading, setLoading] = useState(false);
  const [pictureLoading, setPictureLoading] = useState(false);
  
  const [showEditForm, setShowEditForm] = useState(false);
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [editAbout, setEditAbout] = useState('');
  const [editEducation, setEditEducation] = useState('');
  const [editSkills, setEditSkills] = useState('');
  const [editPortfolio, setEditPortfolio] = useState('');
  const [editLinkedin, setEditLinkedin] = useState('');
  const [editGithub, setEditGithub] = useState('');
  const [editResume, setEditResume] = useState('');
  const [enterPasswordField, setEnterPasswordField] = useState(false)
  const [newPassword, setNewPassword] = useState('');
  // #endregion

  useEffect(()=>{
    if(editFirstName || editLastName || editAbout || editEducation || editSkills || editPortfolio || editLinkedin || editResume || editGithub  || newPassword){
        setEnterPasswordField(true)
    }else{
        setEnterPasswordField(false)
    }
    },[editFirstName, editLastName, editAbout, editEducation, newPassword, editSkills, editPortfolio, editLinkedin, editGithub, editResume])

// #region functions

  // HANDLES CHANGES FOR EDIT PROFILE
  const handleChange = e => {
      if (e.target.name === 'first_name'){
          setEditFirstName(e.target.value);
      }
      else if (e.target.name === 'last_name'){
          setEditLastName(e.target.value);
      }
      else if (e.target.name === 'education'){
          setEditEducation(e.target.value);
      }
      else if (e.target.name === 'about'){
          setEditAbout(e.target.value);
      }
      else if (e.target.name === 'skills'){
          setEditSkills(e.target.value);
      }
      else if (e.target.name === 'portfolio'){
          setEditPortfolio(e.target.value);
      }
      else if (e.target.name === 'linkedin'){
          setEditLinkedin(e.target.value);
      }
      else if (e.target.name === 'github'){
          setEditGithub(e.target.value);
      }
      else if (e.target.name === 'resume'){
          setEditResume(e.target.value);
      }
      else if (e.target.name === 'newPassword'){
          setNewPassword(e.target.value);
      }
      else if (e.target.name === 'oldPassword'){
          setCurrentPassword(e.target.value);
      }
  };

  // WILL BE USED TO RESET ALL INPUTS AFTER HANDLE SUBMIT
  const resetInputs = () => {
    setLoading(false);
    setShowEditForm(false);
    setEditFirstName('');
    setEditLastName('');
    setNewPassword('');
    setCurrentPassword('');
    setEditAbout('');
    setEditLinkedin('');
    setEditResume('');
    setEditSkills('');
    setEditGithub('');
    setEditPortfolio('');
  };

  // USED TO SUBMIT INFORMATION ON EDIT PROFILE.
  // WILL BUILD INTO AN OBJ (USEROBJ), CHECK FOR PASSWORD CONFIRMATION, AND REPLACE DATA IN PROFILE. 
  const handleSubmit = e => {
    e.preventDefault();

    let userObj = { password: currentPassword }
    if (editFirstName) {
      userObj = { ...userObj, first_name: editFirstName }
    }
    if (editLastName) {
      userObj = { ...userObj, last_name: editLastName }
    }
    if (editEducation) {
      userObj = { ...userObj, education: editEducation }
    }
    if (editAbout) {
      userObj = { ...userObj, about: editAbout }
    }
    if (editSkills){
        userObj = {...userObj, skills: editSkills}
    }
    if (editLinkedin){
        userObj = {...userObj, linkedin_url: editLinkedin}
    }
    if (editPortfolio){
        userObj = {...userObj, portfolio_url: editPortfolio}
    }
    if (editGithub){
        userObj = {...userObj, github_url: editGithub}
    }
    if (editResume){
        userObj = {...userObj, resume: editResume}
    }
    if (newPassword){
        userObj = {...userObj, newPassword: newPassword}
    }

    if (currentPassword === '') {
      alert('You must enter your current password to make changes.');
    }
    else if (validateInputs(userObj) && (newPassword === '' || isValidPassword(newPassword))) {
      setLoading(true);
      props.updateUser(userObj, setLoading);
      setShowEditForm(showEditForm);
      resetInputs();
    }
  }

  //Cloudinary to upload profile pictures to the profile page
  const changeProfilePic = (picture) => {
    console.log(picture)
    if (picture) {
      let formData = new FormData();
      formData.append('image', picture);
      setPictureLoading(true);
      props.updateProfilePicture(formData, setPictureLoading);
    }
  }

  //Delete profile pic
  const deleteProfilePic = () => {
    setPictureLoading(true);
    props.deleteProfilePicture(setPictureLoading);
  }
  // #endregion


  return (
    <StyledLoader active={loading} spinner text='Loading...'>
      <div className="container-profile">
        {!showEditForm && <>
          <section className='profile-section'>
            <div className="profile-top" >
              <ProfilePicture currentUser={props.currentUser} changeProfilePic={changeProfilePic} deleteProfilePic={deleteProfilePic} pictureLoading={pictureLoading} />
              <div className="profileNameDiv">
                  <h3 data-testid="first-last">{props.currentUser.first_name} {props.currentUser.last_name}</h3>
                  <h4>{props.currentUser.email}</h4>
                <button onClick={() => setShowEditForm(!showEditForm)}>Edit</button>
              </div>
            </div>
            <div className="profileCard">
              <h3>About</h3>
              <p style={{ textAlign: "justify" }}>{props.currentUser.about}</p>
            </div>
            <div className="profileCard">
              <h3>Education</h3>
              <p>{props.currentUser.education}</p>
            </div>
            {/* <div className="profileCard">
              <h3>Skills</h3>
              <p>This is where the skills would be listed</p>
            </div>
            <div className="profileCard">
              <h3>Job Preferences</h3>
              <p>This is where the job preferences will go</p>
            </div> */}
            <div className="profileCard" style={{marginBottom: "2%"}}>
              <h3>Profile Links</h3>
              <p>Github: {props.currentUser.github_url}</p>
              <p>Resume: {props.currentUser.resume}</p>
              <p>Portfolio: {props.currentUser.portfolio_url}</p>
            </div>
          </section>
        </>}

{/* This is the edit form information, this is what you're messing with whenever you click edit profile on the profile page. */}
      {showEditForm && <>
        <div className="profile-main-div2" data-testid="first-last">
          <div className="profile-second-main2">
            <section className="profile-section">
              <div className="edit-profile-top" >
                  <h3>Update Profile</h3>
                  <ProfilePicture currentUser={props.currentUser} changeProfilePic={changeProfilePic} deleteProfilePic={deleteProfilePic} pictureLoading={pictureLoading} />
                </div>
              </section>
              <form className="profile-main-form2" onSubmit={handleSubmit}>
                <div className="profile-form-inputs2">
                  <div className="profile-form-edit-name">
                    {/* <div>
                        <h3>Skills</h3>
                        <input className="text-input" name="skills" type="text" onChange={handleChange} placeholder={props.currentUser.skills ? props.currentUser.skills : 'Skills' } />
                    </div> */}
                    <div>
                        <h3>Github</h3>
                        <input className="text-input" name="github" type="text" onChange={handleChange} placeholder={props.currentUser.github_url ? props.currentUser.github_url : 'Enter Github URL' } />
                    </div>
                    <div>
                        <h3>Portfolio</h3>
                        <input className="text-input" name="portfolio" type="text" onChange={handleChange} placeholder={props.currentUser.portfolio_url ? props.currentUser.portfolio_url : 'Enter Portfolio' } />
                    </div>
                    <div>
                        <h3>Linkedin</h3>
                        <input className="text-input" name="linkedin" type="text" onChange={handleChange} placeholder={props.currentUser.linkedin_url ? props.currentUser.linkedin_url : 'Enter Linkedin URL ' } />
                    </div>
                    <div>
                        <h3>Upload Resume</h3>
                        <input className="text-input" name="resume" type="text" onChange={handleChange} placeholder={props.currentUser.resume ? props.currentUser.resume : 'Upload Resume Here' } />
                    </div>
                    <div>
                        <h3>New password</h3>
                        <input className="text-input" type='password' name="newPassword" onChange={handleChange} placeholder='New Password'/> 
                    </div>
                    <div>
                      <h3>Last Name</h3>
                      <input className="text-input" name="last_name" onChange={handleChange} placeholder={props.currentUser.last_name} />
                    </div>
                  </div>
                  <div>
                    <h3 style={{ marginTop: "1%" }}>About</h3>
                    <textarea className="text-input" name="about" type="text" onChange={handleChange} placeholder={props.currentUser.about ? props.currentUser.about : 'Tell Us Something About Yourself'} />
                  </div>
                  <div>
                    <h3>Education</h3>
                    <input className="text-input" name="education" type="text" onChange={handleChange} placeholder={props.currentUser.education ? props.currentUser.education : 'Education'} />
                  </div>
                  <div>
                    <h3>New password</h3>
                    <input className="text-input" type='password' name="newPassword" onChange={handleChange} placeholder='New Password' />
                  </div>
                  <div>
                    <h3 style={{ color: 'red' }}>Re-Enter Password to Save Changes</h3>
                    <input className="text-input" type='password' name='oldPassword' onChange={handleChange} placeholder='Current Password' />
                  </div>
                  <div className="edit-profile-btns">
                    <button type="submit" onClick={handleSubmit}>Submit Changes</button>
                    <button className="button" type="submit" onClick={() => setShowEditForm(!showEditForm)}>Cancel</button>
                  </div>
                </div>

                {/* <br /><br /> */}
              </form>
            </div>
          </div>
        </>}
      </div>
    </StyledLoader>
  );
}

const mapStateToProps = state => {
  console.log('Profile MSTP: ', state);
  return {
    currentUser: state.AppReducer.currentUser,
    // skills: state.AppReducer.skills
  };
};

export default connect(mapStateToProps, { updateUser, updateProfilePicture, deleteProfilePicture })(Profile);

// #region Styled components
const StyledLoader = styled(LoadingOverlay)`
    width:100%;
    z-index: 2;
`;
// #endregion