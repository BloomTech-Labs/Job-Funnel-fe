import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import LoadingOverlay from "react-loading-overlay";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { validateInputs, isValidPassword } from '../../utils/AppUtils.js'
import styled from 'styled-components';


import { updateUser } from '../../redux-store/App/AppActions.js';

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
  // #endregion

  useEffect(()=>{
    if(editFirstName || editLastName || editBio || editEducation || newPassword){
        setEnterPasswordField(true)
    }else{
        setEnterPasswordField(false)
    }
    },[editFirstName, editLastName, editBio, editEducation, newPassword])


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
        resetInputs();
    }
    else if (validateInputs(userObj) && (newPassword === '' || isValidPassword(newPassword))) {
            props.updateUser(userObj, setLoading)
            setShowEditForm(showEditForm)
            resetInputs();;
     }
  }


  const url =
    "https://www.rollingstone.com/wp-content/uploads/2019/12/5879708cW.jpg?resize=900,600&w=450";



  return (
    <div className="container-profile">
      {!showEditForm && <>
      <div className="image-container">
        <img className="profile-image1" src={url} />
        <div className="image-content">
          <h3>
            {props.currentUser.first_name} {props.currentUser.last_name}
          </h3>
          <h4>{props.currentUser.email}</h4>
        </div>
        <button onClick={() => setShowEditForm(!showEditForm)}>Edit</button>
      </div>
      <div className="profile-body-container">
        <div className="about-containe">
          <div className="about-me">
              <h3>About Me</h3>
              <p>{props.currentUser.about} </p>
          </div>
        </div>
        <div className="container-one">   
          <div className="education"> 
            <h4>Education</h4>
            <p>{props.currentUser.education}Lambda School</p>
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
              <h4>Github: {props.currentUser.github_url}</h4>
              <p>Resume: {props.currentUser.resume}</p>
              <h4>Portfolio: {props.currentUser.portfolio_url}</h4>
              <p>Artifacts will go under resume as well</p>
            </div>
          </div>  
      </div>
      </>}
    
    {showEditForm && <>
    <div className="profile-form-div">
        <Title>Edit Profile</Title>
        <EditForm onSubmit={handleSubmit}>
        <Label>
            <div>
                <Title className="bold">First Name</Title>    
                <div className='tooltip2'>
                    <Input className="text-input" name="first_name" onChange={handleChange} placeholder={props.currentUser.first_name} type="text"/> 
                </div>
            </div>
            <div>
                <Title className="bold">Last Name</Title>
                <Input className="text-input" name="last_name" onChange={handleChange} placeholder={props.currentUser.last_name}/>
            </div>
        </Label>

        <Label>
            <div>
                <Title className="bold">Education</Title>
                <Input className="text-input" name="education" type="text" onChange={handleChange} placeholder={props.currentUser.education !== null ? props.currentUser.education : ''} />
            </div>
            <div>
                <Title className="bold">New password</Title>
                <Input className="text-input" type='password' name="newPassword" onChange={handleChange} placeholder='New Password'/> 
            </div>
        </Label>

        <PasswordDiv>
            <div>
                <Title>Re-enter password to save changes:</Title>
                <input className="text-input" type='password' name='oldPassword' onChange={handleChange} placeholder='Current Password' />
            </div>
        </PasswordDiv> 
            {/* <br /><br /> */}
            <button className="button" type="submit" onClick={handleSubmit}>Submit Changes</button>
        </EditForm>
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

export default connect(mapStateToProps, { updateUser })(Profile);


// #region Styled components
const StyledLoader = styled(LoadingOverlay)`
    width:100%;
    z-index: 2;
`;

const PasswordDiv = styled.div `
    margin-top: 50px;
    font-style: italic;
    color: #BF0033;
`;

//here and down are edit form edits 
const EditForm = styled.form`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`

// position: relative;
const Label = styled.label`
display: flex;
border: 1px solid black;
justify-content: space-evenly;
margin: 0 auto;
align-items: center;
max-width: 100%;
min-width: 100%;
width: 100%;
`

const Input = styled.input `
    @media (max-width: 1450px) {
        width:100%;
    }
`

const Title = styled.h3`
text-align: center;
`
//#endregion