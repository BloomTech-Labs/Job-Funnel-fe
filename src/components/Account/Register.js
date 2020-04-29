import React, { useState } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { isValidPassword, validateInputs } from "../../utils/AppUtils.js";
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";
import ProfilePicture from "./ProfilePicture.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle, faCamera } from "@fortawesome/free-solid-svg-icons";

import { login } from "../../redux-store/App/AppActions";

//Register function that allows users to register new accounts. Does a POST request to backend in order to store the new data. Also pushes user to Dashboard on signup
const Register = (props) => {
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: "",
    user_type: "applicant",
  });

  const handleChange = (event) => {
    setNewUser({ ...newUser, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (validateInputs(newUser) && isValidPassword(newUser.password)) {
      axios
        .post("https://quick-hire.herokuapp.com/api/auth/register", newUser)
        .then((res) => {
          axios
            .post("https://quick-hire.herokuapp.com/api/auth/login", {
              email: newUser.email,
              password: newUser.password,
            })
            .then((res) => {
              sessionStorage.setItem("token", res.data.token);
              props.login(res.data.user);
              props.history.push("/Dashboard");
            })
            .catch((err) => {
              alert(err.response.data.message);
            });
        })
        .catch((err) => {
          alert(err.response.data.message);
        });
    }
  };

  return (
    <div className="register-page">
      <form onSubmit={handleSubmit}>
        <div className="profile-img"></div>
        <div className="form-inputs">
          <div className="first-row-wrap">
            <div>
              <label>First name </label>
              <input
                type="text"
                name="first_name"
                value={newUser.first_name}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Last name </label>
              <input
                type="text"
                name="last_name"
                value={newUser.last_name}
                onChange={handleChange}
              />
            </div>
          </div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={newUser.email}
            onChange={handleChange}
          />
          <label>Password </label>
          <input
            type="password"
            name="password"
            value={newUser.password}
            onChange={handleChange}
          />
        </div>
        <button className="submit-register-btn" onClick={handleSubmit}>
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
