import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';


import DarkMode from "./DarkMode/DarkMode-Toggle"

import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from '@material-ui/styles';


const theme = createMuiTheme({
  typography: {
    fontFamily: [
        'Franklin Gothic Medium',
        'Arial', 
        'sans-serif'
      ].join(','),
    fontSize: 19
  }
});



export default function SimpleMenu(props) 
{

  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  

  return (
    <ThemeProvider theme={theme}>
        <div className="m-ui-container">
        <Button className="drop-down-btn" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
            Menu
        </Button>
        <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
        >
            <MenuItem >
                <DarkMode/>
            </MenuItem>
            <MenuItem className="logout"onClick={props.logout}>Logout</MenuItem>
        </Menu>
        </div>
    </ThemeProvider>
  );
}