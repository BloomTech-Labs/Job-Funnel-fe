import React,{ useState } from 'react';
import DarkMode from './DarkMode/DarkMode-Toggle';
import { useLocation, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../redux-store/App/AppActions.js';
// import logo from '../../images/logo.png';

function Header(props) {
    const location = useLocation();
    const history = useHistory();
    // console.log('pathname', location.pathname);

    const logOut = () => {
        sessionStorage.removeItem('token');
        props.logout();
        history.push('/');
    }

console.log('location', location.pathname)
  return (
    <>
    <header>
        <Link to='/'><h1>QuickHire</h1></Link>
            {/* <select  name="theme_switcher" onChange={props.changeTheme}>
                <option selected="selected" value={'css/index.css'}>index</option>
                <option value={"css/red.css"}>red</option>
                <option value={"css/darkred.css"}>dark red</option>
                <option value={"css/blue.css"}>blue</option>
                <option value={"css/darkblue.css"}>dark blue</option>
                <option value={"css/green.css"}>green</option>
                <option value={"css/darkgreen.css"}>dark green</option>
            </select> */}
        {(()=>{ //immediately invoked function to allow javascript inside JSX. syntax: {(()=>{})()}

            if (location.pathname === '/') {
                            
                return (
                    <nav>
                        <Link to='/Login'> <button>Login</button></Link>
                    </nav>
                )
            }

          else  if (location.pathname === '/dashboard' || location.pathname === '/Dashboard'){
                return (
                <nav>
                    <Link to ="/Profile"> <button>My Profile</button> </Link>
                    <button onClick={logOut}> Sign Out </button>
                </nav>
                )
            } 
          else  if (location.pathname === '/profile' || location.pathname === '/Profile'){
                return (
                <nav>
                    <Link to ="/Dashboard"> <button>Back to Dashboard</button> </Link>
                    <button onClick={logOut}> Sign Out </button>
                </nav>
                )
            } 

          else  if (location.pathname === '/login' || location.pathname === '/Login'){
                return (
                    <nav>
                        <Link to ="/Register"> <button>Register</button> </Link>
                    </nav>
                    )
            }else if (location.pathname === '/register' || location.pathname === '/Register') {
                return (
                    <nav>
                        <Link to ="/Login"> <button>Login</button> </Link>
                    </nav>
                )
            }
        })()}
        <DarkMode/>
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







