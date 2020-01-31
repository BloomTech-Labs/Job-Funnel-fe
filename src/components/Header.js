import React,{ useState } from 'react';
import { useLocation, useHistory } from 'react-router-dom'
import { connect } from 'react-redux';
import { Link, NavLink } from 'react-router-dom';
import { logout } from '../redux-store/App/AppActions.js';
// import logo from '../../images/logo.png';

function Header(props) {
    const location = useLocation();
    const history = useHistory();
    console.log('pathname', location.pathname);

    const logOut = () => {
        sessionStorage.removeItem('token');
        props.logout();
        history.push('/');
    }


  return (
    <>
    <header>
        
        <Link to='/'><h1>QuickHire</h1></Link>
        {(()=>{ //immediately invoked function to allow javascript inside JSX. syntax: {(()=>{})()}
            if (location.pathname === '/dashboard' || location.pathname === '/Dashboard'){
                return (
                <nav>
                    <Link to ="/Profile"> <button>My Profile</button> </Link>
                    <button onClick={logOut}> Sign Out </button>
                </nav>
                )
            } 
            if (location.pathname === '/profile' || location.pathname === '/Profile'){
                return (
                <nav>
                    <Link to ="/Dashboard"> <button>Back to Dashboard</button> </Link>
                    <button onClick={logOut}> Sign Out </button>
                </nav>
                )
            } 

            if (location.pathname === '/login' || location.pathname === '/Login' || location.pathname === '/'){
                return (
                    <nav>
                        <Link to ="/Register"> <button>Register</button> </Link>
                    </nav>
                    )
            } else if (location.pathname === '/register' || location.pathname === '/Register') {
                return (
                    <nav>
                        <Link to ="/Login"> <button>Login</button> </Link>
                    </nav>
                )
            }

             

            // else{
            //     return (
            //         <>
            //         <nav className='notLoggedIn'>
            //             <NavLink className='navLink' exact to='/Login'>Login</NavLink>
            //             <NavLink className='button' to='/Register'>Register</NavLink>
            //         </nav>
            //         </>
            //     );
            // }
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







