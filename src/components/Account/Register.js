import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { isValidPassword, validateInputs } from '../../utils/AppUtils.js';
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

import { login } from "../../redux-store/App/AppActions" 


const Register = (props) => {
    // #region localstate
    const [loading, setLoading] = useState(false);
    const [newUser, setNewUser] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        user_type: "applicant"
    })  
    // #endregion

    // #region console logs
    // console.log('set register', register)
    // #endregion

    // #region local functions
    const handleChange = event => {
        setNewUser({ ...newUser, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        // console.log('handleSubmit', register)
        event.preventDefault();
        if (validateInputs(newUser) && isValidPassword(newUser.password)) {
            setLoading(true);
            axios.post('https://quickhire.herokuapp.com/api/auth/register', newUser)
            .then(res => {
                console.log('res from post', res.data)
                axios.post("https://quickhire.herokuapp.com/api/auth/login", {
                    email: newUser.email,
                    password: newUser.password
                })
                .then(res => {
                    sessionStorage.setItem('token', res.data.token)
                    props.login(res.data.user);
                    props.history.push('/Dashboard')
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
    // #endregion

    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <>
            <div className="main-div2">
                <div className="second-main2">
                <h3 className="make2">Make the most of your professional life.</h3>
                <form className="main-form2" onSubmit={handleSubmit}>
                    <div className="form-inputs2">
                        <label>First Name </label>
                            <input type="text"  name="first_name" value={newUser.first_name} onChange={handleChange} />
                        <label>Last Name   </label>
                            <input type="text" name="last_name" value={newUser.last_name} onChange={handleChange} />
                        <label>Enter Email    </label>
                            <input type="text" name="email" value={newUser.email} onChange={handleChange} />
                        <label>Create Password  </label>
                            <input type="password" name="password" value={newUser.password} onChange={handleChange} />
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
            </>

        </StyledLoader>
    )
}

const mapStateToProps = state => {
    // console.log('mapstatetoprops: ', state);
    return {
    //   currentUser: state.AppReducer.currentUser,

    };
  };
  
  export default connect(mapStateToProps, {login})(Register);
  //setting




const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;
