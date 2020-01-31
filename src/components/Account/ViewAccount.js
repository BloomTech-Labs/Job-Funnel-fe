import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

function ViewAccount(props) {
    const [loading, setLoading] = useState(true);
    const [pictureLoading, setPictureLoading] = useState(false);
    const [emailAvailable, setEmailAvailable] = useState(true);
    const [emailInvalid, setEmailInvalid] = useState(false);
    const [editImage, setEditImage] = useState([])
    const [editFirstName, setEditFirstName] = useState('');
    const [editLastName, setEditLastName] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [currentPassword, setCurrentPassword] = useState('');
    const [editBio, setEditBio] = useState('');
    const [editEducation, setEditEducation] = useState('');

    const user = props.currentUser;

    const handleChange = e => {
        if (e.target.name === 'email'){
            if(isValidUsername(e.target.value))
            {
                setEmailInvalid(false);
                isUsernameAvailable(e.target.value)
                .then(res => {
                setUsernameAvailable(res);
                })
            }
            else
            {
              setUsernameInvalid(true);
            }
            setEditUserName(e.target.value);
        }
        else if (e.target.name === 'first_name'){
            setEditFirstName(e.target.value);
        }
        else if (e.target.name === 'last_name'){
            setEditLastName(e.target.value);
        }
        else if (e.target.name === 'bio'){
            setEditBio(e.target.value);
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
    }


    const handleSubmit = e => {
        // console.log('handleSubmit', register)
        event.preventDefault();
        if (validateInputs(register) && isValidPassword(register.password)) {
            setLoading(true);
            axios.post('https://quickhire.herokuapp.com/api/auth/register', register)
            .then(res => {
                console.log('res from post', res.data)
                axios.post("https://quickhire.herokuapp.com/api/auth/login", {
                    email: register.email,
                    password: register.password
                })
                .then(res => {
                    sessionStorage.setItem('token', res.data.token)
                    sessionStorage.setItem('id', res.data.user.id)
                    setRegister({ ...register })
                    props.history.push('/dashboard')
                    setLoading(false);
                })
                .catch(err => {
                    console.err(err.response.data.message);
                    setLoading(false);
                    alert(err.response.data.message);
                })
            })
            .catch(err => {
                console.log(err.response.data.message);
            })
        }
    }


    return (
        <div className='view-main'>
            <div className='view-prof-form'>
                <img className="image-container" src={user.profile_img}/>
                <form className="main-form2" onSubmit={handleSubmit}>
                    <div className="form-inputs2">
                        <label>First Name </label>
                            <input type="text"  name="first_name" value={} onChange={handleChange} />
                        <label>Last Name   </label>
                            <input type="text" name="last_name" value={} onChange={handleChange} />
                        <label>Enter Email    </label>
                            <input type="text" name="email" value={} onChange={handleChange} />
                        <label>Create Password  </label>
                            <input type="password" name="password" value={} onChange={handleChange} />
                        {/* <label>Select User Type</label>
                        <select  name="user_type" onChange={handleChange}>
                            <option/>
                            <option value={"applicant"}>Applicant</option>
                            <option value={"recruiter"}>Recruiter</option>
                            <option value={"company"}>Company</option>
                        </select>  */}
                    </div>
                    <button className="buttonclass" onClick={handleSubmit}>Register</button>
                </form>
            </div>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log('mapstatetoprops: ', state);
    return {
        currentUser: state.AppReducer.currentUser,
        otherUser: state.AppReducer.otherUser,
        loading: state.AppReducer.loading,
        loginFailed: state.AppReducer.loginFailed,
    }
  }
  
  export default connect(mapStateToProps, {})(ViewAccount)