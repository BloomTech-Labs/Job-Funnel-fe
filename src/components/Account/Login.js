import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";
import { Link, NavLink } from "react-router-dom";
import landing from "../../images/landing.png";

import { login } from "../../redux-store/App/AppActions";

//Login function for website, uses an POST request in order to send data to backend to login users.
const Login = (props) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    //If statement won't let user login without meeting all of the listed conditions, email and password, without one or the other, you can't login.
    if (!user.email && !user.password) {
      return alert("Please enter an email and password");
    } else if (!user.email) {
      return alert("Please enter an email.");
    } else if (!user.password) {
      return alert("Please enter a password.");
    } else {
      // post pushes you up to the dashboard component if you sucessfully login.
      setLoading(true);
      axios
        .post("https://quick-hire.herokuapp.com/api/auth/login", user)
        .then((res) => {
          console.log("res from post", res.data);
          sessionStorage.setItem("token", res.data.token);
          // sessionStorage.setItem('id', res.data.user.id)
          props.login(res.data.user);
          props.history.push("/Dashboard");
          setLoading(false);
        })
        .catch((err) => {
          console.error("login.js login error: ", err);
          setLoading(false);
          alert(err.response.data.message);
        });
    }
  };

  return (
    <div className="login-page">
      <div className="form-wrap">
        <form onSubmit={handleSubmit}>
          <div className="form-inputs">
            <div className="buttons-wrap">
              <button className="log-in-btn active">Log in</button>
              <Link to="/Register">
                <button className="sign-up-btn">Sign up</button>
              </Link>
            </div>
            <input
              type="email"
              name="email"
              value={user.email}
              placeholder="E-mail"
              onChange={handleChange}
            />
            <input
              type="password"
              name="password"
              value={user.password}
              placeholder="Password"
              onChange={handleChange}
            />
          </div>
          <button className="submit-login" onClick={handleSubmit}>
            Log in
          </button>
        </form>
      </div>
      <div className="img-login">
        <img src={landing} width="650" />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  // console.log('mapstatetoprops: ', state);
  return {
    //   currentUser: state.AppReducer.currentUser,
  };
};

export default connect(mapStateToProps, { login })(Login);
//setting

const StyledLoader = styled(LoadingOverlay)`
  min-height: 100vh;
  width: 100%;
  z-index: 2;
`;
