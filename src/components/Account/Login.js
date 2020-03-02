import React, { useState } from "react";
import { connect } from "react-redux";
import axios from 'axios'
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

import { login } from "../../redux-store/App/AppActions"

//Login function for website, uses an POST request in order to send data to backend to login users.
const Login = (props) => {
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({
        email: '',
        password: ''
    })

    const handleChange = event => {
        setUser({ ...user, [event.target.name]: event.target.value })
    }

    const handleSubmit = event => {
        event.preventDefault();
        //If statement won't let user login without meeting all of the listed conditions, email and password, without one or the other, you can't login.
        if (!user.email && !user.password) {
            return alert('Please enter an email and password')
        } else if (!user.email) {
            return alert('Please enter an email.')
        } else if (!user.password) {
            return alert('Please enter a password.')
        } else {
            // post pushes you up to the dashboard component if you sucessfully login.
            setLoading(true);
            axios.post('https://quick-hire.herokuapp.com/api/auth/login', user)
                .then(res => {
                    console.log('res from post', res.data)
                    sessionStorage.setItem('token', res.data.token)
                    // sessionStorage.setItem('id', res.data.user.id)
                    props.login(res.data.user);
                    props.history.push('/Dashboard')
                    setLoading(false);
                })
                .catch(err => {
                    console.error('login.js login error: ', err)
                    setLoading(false);
                    alert(err.response.data.message)
                })
        }
    }

    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <>
                <div className="main-div ">
                    <div className="second-main">
                        <h3 className="make animated faster zoomInRight">Make the most of your professional life.</h3>
                        <form className="main-form animated faster zoomInLeft" onSubmit={handleSubmit}>
                            <div className="form-inputs">
                                <label>Email</label>
                                <input type="email" name="email" value={user.email} onChange={handleChange} />
                                <label>Password</label>
                                <input type="password" name="password" value={user.password} onChange={handleChange} />
                            </div>
                            <button className="buttonclass" onClick={handleSubmit}>Login</button>
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

export default connect(mapStateToProps, { login })(Login);
//setting


const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;
