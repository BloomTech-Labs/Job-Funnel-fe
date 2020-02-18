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
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [editAbout, setEditAbout] = useState('');
  const [editEducation, setEditEducation] = useState('');
  const [enterPasswordField, setEnterPasswordField] = useState(false)
  // #endregion

  useEffect(()=>{
    if(editFirstName || editLastName || editAbout || editEducation || newPassword){
        setEnterPasswordField(true)
    }else{
        setEnterPasswordField(false)
    }
    },[editFirstName, editLastName, editAbout, editEducation, newPassword])

// #region functions
  const handleChange = e => {
      // if (e.target.email === 'email'){
      //   // INSERT VALIDATION FOR EMAIL
      // }
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
      else if (e.target.name === 'newPassword'){
          setNewPassword(e.target.value);
      }
      else if (e.target.name === 'oldPassword'){
          setCurrentPassword(e.target.value);
      }
  };

  const resetInputs = () => {
    setLoading(false);
    setShowEditForm(false);
    setEditFirstName('');
    setEditLastName('');
    setNewPassword('');
    setCurrentPassword('');
    setEditAbout('');
  };

  const handleSubmit = e => {
    e.preventDefault();

    let userObj = { password: currentPassword }
    if (editFirstName){
        userObj = {...userObj, first_name: editFirstName}
    }
    if (editLastName){
        userObj = {...userObj, last_name: editLastName}
    }
    if (editEducation){
        userObj = {...userObj, education: editEducation}
    }
    if (editAbout){
        userObj = {...userObj, about: editAbout}
    }
    if (newPassword){
        userObj = {...userObj, newPassword: newPassword}
    }
    
    if (currentPassword === ''){
        alert('You must enter your current password to make changes.');
    }
    else if (validateInputs(userObj) && (newPassword === '' || isValidPassword(newPassword))) {
      setLoading(true);
      props.updateUser(userObj, setLoading);
      setShowEditForm(showEditForm);
      resetInputs();
     }
  }

  const changeProfilePic = (picture) => {
    console.log(picture)
    if(picture){
      let formData = new FormData();
      formData.append('image', picture);
      setPictureLoading(true);
      props.updateProfilePicture(formData, setPictureLoading);
    }
  }

  const deleteProfilePic = () => {
    setPictureLoading(true);
    props.deleteProfilePicture(setPictureLoading);
  }
// #endregion


  return (
    <StyledLoader active={loading} spinner text='Loading...'>
      {/* <select  name="theme_switcher" onChange={props.changeTheme}>
                <option selected="selected" value={'css/index.css'}>index</option>
                <option value={"css/red.css"}>red</option>
                <option value={"css/darkred.css"}>dark red</option>
                <option value={"css/blue.css"}>blue</option>
                <option value={"css/darkblue.css"}>dark blue</option>
                <option value={"css/green.css"}>green</option>
                <option value={"css/darkgreen.css"}>dark green</option>
            </select> */}
      <div className="container-profile">
        {!showEditForm && <>
          <section className='profile-section'>
            <div className="profile-top" >
              <ProfilePicture currentUser={props.currentUser} changeProfilePic={changeProfilePic} deleteProfilePic={deleteProfilePic} pictureLoading={pictureLoading} />
              <div className="profileNameDiv">
                  <h3>{props.currentUser.first_name} {props.currentUser.last_name}</h3>
                  <h4>{props.currentUser.email}</h4>
                <button onClick={() => setShowEditForm(!showEditForm)}>Edit</button>
              </div>
            </div>
            <div className="profileCard">
              <h3>About</h3>
              <p style={{textAlign: "justify"}}>{props.currentUser.about}</p>
            </div>
            <div className="profileCard">
              <h3>Education</h3>
              <p> - {props.currentUser.education}</p>
            </div>
            <div className="profileCard">
              <h3>Skills</h3>
              <p>This is where the skills would be listed</p>          
            </div>
            <div className="profileCard">
              <h3>Job Preferences</h3>
              <p>This is where the job preferences will go</p>
            </div>
            <div className="profileCard" style={{marginBottom: "2%"}}>
              <h3>Profile Links</h3>
              <p>Github: {props.currentUser.github_url}</p>
              <p>Resume: {props.currentUser.resume}</p>
              <p>Portfolio: {props.currentUser.portfolio_url}</p>
            </div>
          </section>
        </>}

      {showEditForm && <>
        <div className="profile-main-div2">
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
                        <div>
                            <h3>First Name</h3>    
                            <input className="text-input" name="first_name" onChange={handleChange} placeholder={props.currentUser.first_name} type="text"/> 
                        </div>
                        <div>
                            <h3>Last Name</h3>
                            <input className="text-input" name="last_name" onChange={handleChange} placeholder={props.currentUser.last_name}/>
                        </div>
                    </div>
                    <div>
                        <h3 style={{marginTop: "1%"}}>About</h3>
                        <textarea className="text-input" name="about" type="text" onChange={handleChange} placeholder={props.currentUser.about ? props.currentUser.about : 'Tell Us Something About Yourself' } />
                    </div>
                    <div>
                        <h3>Education</h3>
                        <input className="text-input" name="education" type="text" onChange={handleChange} placeholder={props.currentUser.education ? props.currentUser.education : 'Education' } />
                    </div>
                    <div>
                        <h3>New password</h3>
                        <input className="text-input" type='password' name="newPassword" onChange={handleChange} placeholder='New Password'/> 
                    </div>
                    <div>
                        <h3 style={{color: 'red'}}>Re-Enter Password to Save Changes</h3>
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
  // console.log('mapstatetoprops: ', state);
  return {
    currentUser: state.AppReducer.currentUser,
  };
};

export default connect(mapStateToProps, { updateUser, updateProfilePicture, deleteProfilePicture })(Profile);

// #region Styled components
const StyledLoader = styled(LoadingOverlay)`
    width:100%;
    z-index: 2;
`;
// #endregion