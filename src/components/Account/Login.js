import React, {useState} from "react";
import { connect } from "react-redux";
import axios from 'axios'
import styled from "styled-components";
import LoadingOverlay from "react-loading-overlay";

import { login } from "../../redux-store/App/AppActions" 


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
    if(user.email && user.password){
        setLoading(true);
        axios.post('https://quickhire.herokuapp.com/api/auth/login', user)
            .then( res => {
                console.log('res from post', res.data)
                sessionStorage.setItem('token', res.data.token)
                props.login(res.data.user);
                props.history.push('/Dashboard')
                setLoading(false);
            })
            .catch(error => {
                console.error(error)
                setLoading(false);
                alert('please enter a valid username and password')
            })
    } else if(user.email && !user.password){
        return alert('Please enter a password.')
    } else if(!user.email && user.password) {
        return alert('Please enter an email.')
    } else {
        return alert('Please enter an email and password')
    }
  }

    return (
        <StyledLoader active={loading} spinner text='Loading...'>
            <>
            <div className ="main-div">
                <div className="second-main">
                    <h3 className="make">Make the most of your professional life.</h3>
                    <form className="main-form" onSubmit={handleSubmit}>
                        <div className="form-inputs">
                            <label>Email</label>
                            <input type="text" name="email" value={user.email} onChange={handleChange} />
                            <label>Password</label>
                            <input type="password" name="password" value={user.password} onChange={handleChange} />
                        </div>
                        <button className="buttonclass"onClick={handleSubmit}>Login</button>
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
  
  export default connect(mapStateToProps, {login})(Login);
  //setting


const StyledLoader = styled(LoadingOverlay)`
    min-height: 100vh;
    width:100%;
    z-index: 2;
`;
