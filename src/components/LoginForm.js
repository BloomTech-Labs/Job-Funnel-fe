import React, {useState} from "react";

import axios from "axios";

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
            setLogin({...login, isLoggedIn: true})
            props.history.push('/dashboardtest')
            // save id and save token to local storage/session storage here
        })
        .catch(error => {
            console.error(error)
        })
  }


    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h4>Login</h4>
                <div>
                    <input
                        type="text"
                        name="email"
                        placeholder="Enter Email"
                        value={login.email}
                        onChange={handleChange}
                    />
                    <input
                        type="password"
                        name="password"
                        placeholder=" Enter Password"
                        value={login.password}
                        onChange={handleChange}
                    />
                </div>
                <button onClick={handleSubmit}>Login</button>
            </form>
        </div>
    )
}

export default LoginForm;

