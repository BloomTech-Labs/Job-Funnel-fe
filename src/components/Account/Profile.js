import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import LoadingOverlay from "react-loading-overlay";
import styled from 'styled-components';

import { validateInputs, isValidPassword } from '../../utils/AppUtils.js'
import { updateUser, deleteProfilePicture, updateProfilePicture } from '../../redux-store/App/AppActions.js';
import ProfilePicture from "./ProfilePicture.js"


function Profile(props) {
  // #region Local State
  const [loading, setLoading] = useState(true);
  const [pictureLoading, setPictureLoading] = useState(false);
  const [emailAvailable, setEmailAvailable] = useState(true);
  const [emailInvalid, setEmailInvalid] = useState(false);
  const [editImage, setEditImage] = useState([]);

  const [showEditForm, setShowEditForm] = useState(false);
  const [editFirstName, setEditFirstName] = useState('');
  const [editLastName, setEditLastName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [currentPassword, setCurrentPassword] = useState('');
  const [editBio, setEditBio] = useState('');
  const [editEducation, setEditEducation] = useState('');
  const [enterPasswordField, setEnterPasswordField] = useState(false)

  const url = "https://www.rollingstone.com/wp-content/uploads/2019/12/5879708cW.jpg?resize=900,600&w=450";
  // #endregion

  useEffect(()=>{
    if(editFirstName || editLastName || editBio || editEducation || newPassword){
        setEnterPasswordField(true)
    }else{
        setEnterPasswordField(false)
    }
    },[editFirstName, editLastName, editBio, editEducation, newPassword])

// #region functions
  const handleChange = e => {

      if (e.target.email === 'email'){
        // INSERT VALIDATION FOR EMAIL
      }
      else if (e.target.name === 'first_name'){
        setEditFirstName(e.target.value);
      }
      else if (e.target.name === 'last_name'){
          setEditLastName(e.target.value);
      }
      else if (e.target.name === 'education'){
          setEditEducation(e.target.value);
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
    if (newPassword){
        userObj = {...userObj, newPassword: newPassword}
    }

    
    if (currentPassword === ''){
        alert('You must enter your current password to make changes.');
        // resetInputs();
    }
    else if (validateInputs(userObj) && (newPassword === '' || isValidPassword(newPassword))) {
            props.updateUser(userObj, setLoading)
            setShowEditForm(showEditForm)
            resetInputs();;
     }
  }

  const changeProfilePic = (picture) => {
    if(picture){
      const formData = new FormData();
      formData.append('image', picture);
      // console.log(picture);
      // console.log(formData);
      setPictureLoading(true);
      props.updateProfilePicture(formData, setPictureLoading);
    }
  }

const deleteProfilePic = () => {
    //add loading
        props.deleteProfilePicture(setPictureLoading);
}
// #endregion


  return (
    <div className="container-profile">
      {!showEditForm && <>
        <section className='profile-section'>
          <div className="image-container">
            {/* <img className="profile-image1" src={url} /> */}
            <ProfilePicture currentUser={props.currentUser} changeProfilePic={changeProfilePic} deleteProfilePic={deleteProfilePic} pictureLoading={pictureLoading} />
            <h3>{props.currentUser.first_name} {props.currentUser.last_name}</h3>
            {/* <h4>{props.currentUser.email}</h4> */}
            <button onClick={() => setShowEditForm(!showEditForm)}>Edit</button>
          </div>
          
          <div className="profile-info">
              <div>
                <h3>{props.currentUser.first_name} {props.currentUser.last_name}</h3>
                <p>{props.currentUser.email}</p>
                <button onClick={() => setShowEditForm(!showEditForm)}>edit</button>
              </div>
          </div>

              <div className="about-me">
                <h3>About</h3>
                <p>{props.currentUser.about} Quisque eget laoreet ex, quis lacinia massa. Nam mauris dui, consectetur in ipsum quis, cursus tempor felis. Aliquam eget ex tincidunt, molestie mi et, pellentesque ipsum. Nullam a suscipit justo. Curabitur sollicitudin nunc tellus, eget iaculis velit fringilla eget. Quisque sit amet maximus tortor. Cras elit dui, mattis vitae velit sit amet, suscipit aliquam nulla. </p>
              </div>
              <div className = "education">
                <h3>Education</h3>
                <p> - {props.currentUser.education} Lambda School</p>
              </div>
              <div className="user-skills">
                <h3>Skills</h3>
                <p>This is where the skills would be listed</p>          
              </div>
              <div className="job-pref">
                <h3>Job Preferences</h3>
                <p>This is where the job preferences will go</p>
              </div>
              <div className="artifacts">
                <h3>Artifacts</h3>
                <h4>Github: {props.currentUser.github_url}</h4>
                <p>Resume: {props.currentUser.resume}</p>
                <h4>Portfolio: {props.currentUser.portfolio_url}</h4>
              </div>
        </section>
      </>}
    
    {showEditForm && <>
      <div className="profile-main-div2">
        <div className="profile-second-main2">
          <h3 className="profile-make2">Edit Profile</h3>
          <form className="profile-main-form2" onSubmit={handleSubmit}>
            <div className="profile-form-inputs2">
                  <div>
                      <h3 className="bold">First Name</h3>    
                      <div className='tooltip2'>
                          <input className="text-input" name="first_name" onChange={handleChange} placeholder={props.currentUser.first_name} type="text"/> 
                      </div>
                  </div>
                  <div>
                      <h3 className="bold">Last Name</h3>
                      <input className="text-input" name="last_name" onChange={handleChange} placeholder={props.currentUser.last_name}/>
                  </div>
                  <div>
                      <h3 className="bold">Education</h3>
                      <input className="text-input" name="education" type="text" onChange={handleChange} placeholder={props.currentUser.education ? props.currentUser.education : 'Education' } />
                  </div>
                  <div>
                      <h3 className="bold">New password</h3>
                      <input className="text-input" type='password' name="newPassword" onChange={handleChange} placeholder='New Password'/> 
                  </div>
                  <div>
                      <h3>Re-enter password to save changes:</h3>
                      <input className="text-input" type='password' name='oldPassword' onChange={handleChange} placeholder='Current Password' />
                  </div>
                <button className="button" type="submit" onClick={handleSubmit}>Submit Changes</button>
                <button className="button" type="submit" onClick={() => setShowEditForm(!showEditForm)}>Cancel</button>
            </div>
            {/* <br /><br /> */}
          </form>
        </div>
      </div>
    </>}
    </div>
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