import React, { useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux-store/App/AppActions.js";
import SimpleMenu from "./DropDown";
import logo from "../images/quickhire.svg";

// header - includes links to login, register, dashboard, menu drop down with logout and darkmode on it.
function Header(props) {
  const location = useLocation();
  const history = useHistory();

  const logOut = () => {
    sessionStorage.removeItem("token");
    props.logout();
    history.push("/Login");
  };

  return (
    <>
      <header>
        <Link to="/Dashboard">
          <img className="logo-img" src={logo} />
        </Link>

        {(() => {
          if (location.pathname === "/") {
            return (
              <nav>
                <Link to="/Register">
                  <button className="sign-up-btn">Sign up</button>
                </Link>
                <Link to="/Login">
                  <button className="log-in-btn">Log in</button>
                </Link>
              </nav>
            );
          } else if (location.pathname === "/Dashboard") {
            return (
              <nav>
                <SimpleMenu logout={logOut} currentUser={props.currentUser} />
              </nav>
            );
          } else if (location.pathname === "/Profile") {
            return (
              <nav>
                <Link to="/Dashboard">
                  <button className="dashboard-btn">Back to Dashboard</button>
                </Link>
                <SimpleMenu logout={logOut} />
              </nav>
            );
          } else if (location.pathname === "/Login") {
            return (
              <nav style={{ minWidth: "0px" }}>
                <Link to="/Register">
                  <button className="sign-up-btn">Sign up</button>
                </Link>
              </nav>
            );
          } else if (location.pathname === "/Register") {
            return (
              <nav style={{ minWidth: "0px" }}>
                <Link to="/Login">
                  <button className="log-in-btn">Log in</button>
                </Link>
              </nav>
            );
          }
        })()}
      </header>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.AppReducer.currentUser,
  };
};

export default connect(mapStateToProps, { logout })(Header);
