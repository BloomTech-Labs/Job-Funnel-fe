import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { isValidPassword, validateInputs } from '../../utils/AppUtils.js';
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";
import ProfilePicture from "./ProfilePicture.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCamera } from "@fortawesome/free-solid-svg-icons";

import { login } from "../../redux-store/App/AppActions"

//Register function that allows users to register new accounts. Does a POST request to backend in order to store the new data. Also pushes user to Dashboard on signup
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
            //end point to post to make a new user on the backend
            axios.post('https://quick-hire.herokuapp.com/api/auth/register', newUser)
                .then(res => {
                    console.log('res from post', res.data)
                    //sends data needed to login to the login endpoint
                    axios.post("https://quick-hire.herokuapp.com/api/auth/login", {
                        email: newUser.email,
                        password: newUser.password
                    })
                        .then(res => {
                            sessionStorage.setItem('token', res.data.token)
                            // sessionStorage.setItem('id', res.data.user.id)
                            props.login(res.data.user);
                            //pushes user to the dashboard once they successfully register an account
                            props.history.push('/Dashboard')
                            setLoading(false);
                        })
                        .catch(err => {
                            console.log(err.response.data.message);
                            setLoading(false);
                            alert(err.response.data.message);
                        })
                })
                .catch(err => {
                    console.log(err.response.data.message);
                    setLoading(false);
                    alert(err.response.data.message);
                })
        }
    }
    // #endregion

    return (
        <div className="register-page">
            <form onSubmit={handleSubmit}>
                <div className="profile-img">

                </div>
                <div className="form-inputs">
                    <div className="first-row-wrap">
                        <div>
                            <label>First name </label>
                            <input type="text" name="first_name" value={newUser.first_name} onChange={handleChange} />
                        </div>
                        <div>
                            <label>Last name   </label>
                            <input type="text" name="last_name" value={newUser.last_name} onChange={handleChange} />
                        </div>
                    </div>
                    <label>Email</label>
                    <input type="email" name="email" value={newUser.email} onChange={handleChange} />
                    <label>Password  </label>
                    <input type="password" name="password" value={newUser.password} onChange={handleChange} />
                </div>
                <button className="submit-register-btn" onClick={handleSubmit}>Register</button>
            </form>
        </div>
    )
}

const mapStateToProps = state => {
    // console.log('mapstatetoprops: ', state);
    return {
        //   currentUser: state.AppReducer.currentUser,
    };
};

export default connect(mapStateToProps, { login })(Register);


const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;
