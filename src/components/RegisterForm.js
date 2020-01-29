import React, { useState } from "react";

import axios from "axios";
import { isValidPassword, validateInputs } from '../utils/AppUtils.js';

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

const RegisterForm = (props) => {
    const [loading, setLoading] = useState(false)
    const [register, setRegister] = useState({
        first_name: '',
        last_name: '',
        email: '',
        password: '',
        user_type: ''
        // isLoggedIn: false
    })  
    
    const handleChange = event => {
        setRegister({ ...register, [event.target.name]: event.target.value })
    }

    console.log('set register', register)
    const handleSubmit = event => {
        console.log('set register 2', register)
        event.preventDefault();
        if (validateInputs(register) && isValidPassword(register.password)) {
            setLoading(true);
            axios
                .post('https://quickhire.herokuapp.com/api/auth/register', register)
                .then(res => {
                    console.log('res from post', res.data)
                    axios
                        .post("https://quickhire.herokuapp.com/api/auth/login", {
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
                .catch(error => {
                    console.error(error)
                })
        }


    }


    return (
    <StyledLoader active={loading} spinner text='Loading...'>
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Register</h4>
                <div>
                    <input type="text" name="first_name" placeholder="Enter Your First Name" value={register.first_name}
                        onChange={handleChange} />
                    <input
                        type="text"
                        name="last_name"
                        placeholder=" Enter Your Last Name"
                        value={register.last_name}
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Your Email"
                        value={register.email}
                        onChange={handleChange}
                    />
                    <input type="password" name="password" placeholder=" Create a Password"value={register.password}onChange={handleChange} />

                    <input type="password" name="password" placeholder=" Create a Password" value={register.password}
                        onChange={handleChange} />

                    <input type="text" name="user_type" placeholder=" Job Applicant or Recruiter?" value={register.user_type}
                        onChange={handleChange} />

                    {/* <select value={register.user_type} onChange={handleChange}>
                            <option value="applicant">Applicant</option>
                            <option value="recruiter">Recruiter</option>
                            <option value="company">Company</option>
                        </select> */}
                </div>
                <button onClick={handleSubmit}>Register</button>
            </form>
        </div>
        </StyledLoader>
    )
}

export default RegisterForm;

const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;