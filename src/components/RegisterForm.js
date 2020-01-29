import React, { useState } from "react";

import axios from "axios";
import { isValidPassword, validateInputs } from '../utils/AppUtils.js';

import TopNav from "./TopNav"
import "./RegisterForm.css"

import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

const RegisterForm = (props) => {
    // #region localstate
    const [loading, setLoading] = useState(false)
    const [register, setRegister] = useState({
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
            setRegister({ ...register, [event.target.name]: event.target.value })
        }

        const handleSubmit = event => {
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
    // #endregion


    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <>
            <TopNav/>
            <div className="main-div2">
                <div className="second-main2">
                <h3 className="make2">Make the most of your professional life.</h3>
                <form className="main-form2" onSubmit={handleSubmit}>
                    <div className="form-inputs2">
                        <label>First Name </label>
                            <input type="text"  name="first_name" value={register.first_name} onChange={handleChange} />
                        <label>Last Name   </label>
                            <input type="text" name="last_name" value={register.last_name} onChange={handleChange} />
                        <label>Enter Email    </label>
                            <input type="text" name="email" value={register.email} onChange={handleChange} />
                        <label>Create Password  </label>
                            <input type="password" name="password" value={register.password} onChange={handleChange} />
                        {/* <label>Select User Type</label>
                        <select  name="user_type" onChange={handleChange}>
                            <option/>
                            <option value={"applicant"}>Applicant</option>
                            <option value={"recruiter"}>Recruiter</option>
                            <option value={"company"}>Company</option>
                        </select>  */}
                    </div>
                    <Buttonc>
                        <button className="buttonclass" onClick={handleSubmit}>Register</button>
                    </Buttonc>
                </form>
                </div>
            </div>
            </>
        </StyledLoader>
    )
}

export default RegisterForm;

const Buttonc = styled.div`

&: hover .buttonclass{
  background: #fff;
  color: #3073AB; 
  }
`


const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;
