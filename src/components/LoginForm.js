import React, {useState} from "react";

// import axiosWithAuth from "../utils/axiosWithAuth"
import axios from 'axios'
import TopNav from "./TopNav"

import "./LoginForm.css"
import styled from "styled-components";


const LoginForm = (props) => {
  const [login, setLogin] = useState({
    email: '',
    password: '',
    isLoggedIn: false
  })

  const handleChange = event => {
    setLogin({ ...login, [event.target.name]: event.target.value })
  }


  const handleSubmit = event => {
    event.preventDefault();
    axios
    .post('https://quickhire.herokuapp.com/api/auth/login', login)
        .then( res => {
            console.log('res from post', res.data)
            sessionStorage.setItem('token', res.data.token)
            sessionStorage.setItem('id', res.data.user.id)
            setLogin({...login, isLoggedIn: true})
            props.history.push('/dashboard')

        })
        .catch(error => {
            console.error(error)
        })
  }

    return (
        <>
        <TopNav
        login={login}
        />
        <div className ="main-div">
            <div className="second-main">
            <h3 className="make">Make the most of your professional life.</h3>
                <form className="main-form" onSubmit={handleSubmit}>
                    <div className="form-inputs">
                        <label>Email</label>
                        <input
                            type="text"
                            name="email"
                            value={login.email}
                            onChange={handleChange}
                        />
                        <label>Password</label>
                        <input
                            type="password"
                            name="password"
                            value={login.password}
                            onChange={handleChange}
                        />
                    </div>
                    <Buttonc>
                        <button className="buttonclass"onClick={handleSubmit}>Login</button>
                    </Buttonc>
                </form>
            </div>
        </div>
        </>
    )
}

export default LoginForm;

const Buttonc = styled.div`

&: hover .buttonclass{
  background: #fff;
  color: #3073AB; 
  }
`
