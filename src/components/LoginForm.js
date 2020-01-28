import React, {useState} from "react";

import axiosWithAuth from "../utils/axiosWithAuth"

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
    axiosWithAuth()
    .post('https://quickhire.herokuapp.com/api/auth/login', login)
        .then( res => {
            console.log('res from post', res.data)
            sessionStorage.setItem('token', res.data.token)
            sessionStorage.setItem('id', res.data.user.id)
            setLogin({...login, isLoggedIn: true})
            props.history.push('/dashboardexample')

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

