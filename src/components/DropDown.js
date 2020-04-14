import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Link, NavLink } from 'react-router-dom';
import { getCurrentUser } from '../redux-store/App/AppActions.js'
import { connect } from 'react-redux';
import styled from 'styled-components'

import DarkMode from "./DarkMode/DarkMode-Toggle"

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';

// drop down menu for the header of the page using material ui
const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Lato',
      'Arial',
      'sans-serif'
    ].join(','),
    fontSize: 19
  }
});



function SimpleMenu(props) {

  const [anchorEl, setAnchorEl] = React.useState(null);

  const profilePic = props.currentUser.profile_img

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };


  return (
    <ThemeProvider theme={theme}>
      <div className="m-ui-container">
        <Button className="test" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>


          {props.currentUser.profile_img ? <a id="profile-image"><img src={profilePic} width="55" height="55" className="profile-nav" /></a> : <button className="profile">Profile</button>}


        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          keepMounted
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >

          <MenuItem className="logout"><LinkStyled to="/Profile" > My Profile </LinkStyled> </MenuItem>
          <MenuItem >
            <DarkMode />
          </MenuItem>
          <MenuItem className="logout" onClick={props.logout}>Logout</MenuItem>

        </Menu>
      </div>
    </ThemeProvider>
  );
}


const LinkStyled = styled(Link)`
  color:black;
`

const mapStateToProps = state => {
  // console.log('mapstatetoprops: ', state);
  return {
    currentUser: state.AppReducer.currentUser,
  }
}
export default connect(mapStateToProps)(SimpleMenu)
