import React, {useState} from 'react';
import axios from "axios";

import { Link } from "react-router-dom";

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import DropDownMenu from 'material-ui/DropDownMenu';
// import Link from '@material-ui/core/Link';
import MenuItem from 'material-ui/MenuItem';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';



function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        QuickHire
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}


const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url("https://source.unsplash.com/YXemfQiPR_E")',
    backgroundRepeat: 'no-repeat',
    backgroundColor:
      theme.palette.type === 'dark' ? theme.palette.grey[900] : theme.palette.grey[50],
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignInSide(props) {
  const classes = useStyles();

  //my code
  const [register, setRegister] = useState({
    first_name: '',
    last_name: '',
    email:'',
    password:'',
    user_type: ''
  })

  const handleChange = event => {
    setRegister({ ...register, [event.target.name]: event.target.value })
  }

  console.log('set register', register)

  const handleSubmit = event => {
    console.log('set register 2', register)
    event.preventDefault();
    axios
        .post('https://quickhire.herokuapp.com/api/auth/register', register)
        .then( res => {
            console.log('res from post', res.data)
            axios
            .post("https://quickhire.herokuapp.com/api/auth/login", {
                email: register.email,
                password: register.password
            })
            .then(res => {
                sessionStorage.setItem('token', res.data.token)
                sessionStorage.setItem('id', res.data.user.id)
                setRegister({...register})
                props.history.push('/dashboard')
            })
            .catch(err => {
                console.err(err)
            })

        })
        .catch(error => {
            console.error(error)
        })

  }
  //end of my stuff
  // material ui return

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Register
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="First Name"
              autoFocus
              onChange={handleChange}
              type="text"
              name="first_name"
              placeholder="Enter Your First Name"
              value={register.first_name}

            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Last Name"
              autoFocus
              type="text"
              name="last_name"
              placeholder=" Enter Your Last Name"
              value={register.last_name}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Email"
              type="text"
              name="email"
              placeholder="Enter Your Email"
              value={register.email}
              onChange={handleChange}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="Password"
              type="password"
              name="password"
              placeholder=" Create a Password"
              value={register.password}
              onChange={handleChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              label="User Type"
              type="text"
              name="user_type"
              placeholder=" Applicant or recruiter?"
              value={register.user_type}
              onChange={handleChange}
            />
            {/* <DropDownMenu 
                value={register.user_type} 
                onChange={handleChange}   
            >
                <MenuItem value={"applicant"} primaryText="Applicant"  />
                <MenuItem value={"recruiter"} primaryText="Recruiter" />
                <MenuItem value={"company"} primaryText="Company" />

        </DropDownMenu> */}

            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="secondary"
              className={classes.submit}
              onClick={handleSubmit}
            >
              Register
            </Button>
            <Grid container>
              <Grid item xs>
                {/* <Link href="#" variant="body2">
                  Forgot password?
                </Link> */}
              </Grid>
              <Grid item>
                <Link to ="/testing2" variant="body2">
                  {"Already have an account? Sign In"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}