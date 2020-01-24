import React, {useState} from "react";


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
    props.history.push('/dashboard')
  }


    return (
        <div>
            <form>
                <h4>Login</h4>
                <div onSubmit={handleSubmit}>
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

