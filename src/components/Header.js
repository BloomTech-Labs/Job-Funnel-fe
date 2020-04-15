import React, { useState, useEffect } from 'react';
import DarkMode from './DarkMode/DarkMode-Toggle';
import { useLocation, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../redux-store/App/AppActions.js';
<<<<<<< HEAD
import SimpleMenu from "./DropDown";
import logo from '../images/quickhire.svg';
import { getCurrentUser } from '../redux-store/App/AppActions.js'
import quickhire from './../images/quickhire.svg'
=======
import SimpleMenu from "./DropDown"
>>>>>>> master


// header - includes links to login, register, dashboard, menu drop down with logout and darkmode on it.
function Header(props) {
    const location = useLocation();
    const history = useHistory();

    const logOut = () => {
        sessionStorage.removeItem('token');
        props.logout();
        history.push('/Login');
    }

    // const DropDown = () => {
    //     props.history.push('/')
    // }

    console.log('?????', props.currentUser)

    console.log('location', location.pathname)
    return (
        <>
            <header>
<<<<<<< HEAD
                <Link to='/Dashboard'>
                    <img className="logo-img" src={logo} />

                </Link>
=======
                <Link to='/Dashboard'><h1>QuickHire</h1></Link>
>>>>>>> master
                {/* <select  name="theme_switcher" onChange={props.changeTheme}>
                <option selected="selected" value={'css/index.css'}>index</option>
                <option value={"css/red.css"}>red</option>
                <option value={"css/darkred.css"}>dark red</option>
                <option value={"css/blue.css"}>blue</option>
                <option value={"css/darkblue.css"}>dark blue</option>
                <option value={"css/green.css"}>green</option>
                <option value={"css/darkgreen.css"}>dark green</option>
            </select> */}
                {(() => { //immediately invoked function to allow javascript inside JSX. syntax: {(()=>{})()}

                    if (location.pathname === '/') {

                        return (
                            <nav>
                                <Link to='/Register'> <button className="sign-up-btn">Sign up</button></Link>
                                <Link to='/Login'> <button className="log-in-btn">Log in</button></Link>
                            </nav>
                        )
                    }

                    else if (location.pathname === '/dashboard' || location.pathname === '/Dashboard' || location.pathname === '/Dashboard/Saved' || location.pathname === '/Dashboard/Applied') {
                        return (
                            <nav>
                                <SimpleMenu logout={logOut} currentUser={props.currentUser} />
                            </nav>
                        )
                    }
                    else if (location.pathname === '/profile' || location.pathname === '/Profile') {
                        return (
                            <nav>
                                <Link to="/Dashboard"> <button className="dashboard-btn">Back to Dashboard</button> </Link>
                                <SimpleMenu logout={logOut} />
                            </nav>
                        )
                    }


                    else if (location.pathname === '/login' || location.pathname === '/Login') {
                        return (
                            <nav style={{ minWidth: '0px' }}>
                                <Link to="/Register"> <button className="sign-up-btn">Sign up</button> </Link>
                            </nav>
                        )
                    }
                    else if (location.pathname === '/register' || location.pathname === '/Register') {
                        return (
                            <nav style={{ minWidth: '0px' }}>
                                <Link to="/Login"> <button className="log-in-btn">Log in</button> </Link>
                            </nav>
                        )
                    }
                    else if (location.pathname === '/about' || location.pathname === '/About') {
                        return (
                            <nav>
                                <Link to="/Login"> <button>Log in</button> </Link>
                                <Link to="/Register"> <button>Sign up</button> </Link>
                            </nav>
                        )
                    }
                })()}
            </header>
        </>
    );
}

const mapStateToProps = state => {
    // console.log('mapstatetoprops: ', state);
    return {
        currentUser: state.AppReducer.currentUser,
    }
}
export default connect(mapStateToProps, { logout })(Header)







