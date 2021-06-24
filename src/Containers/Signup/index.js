import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { Link } from 'react-router-dom';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { Alert } from '@material-ui/lab';
import Container from '@material-ui/core/Container';
import Copyright from './copyright';
import useStyles from './styles';




export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showError, setShowError] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  

  const classes = useStyles();


  const handleClick = async() => {
    if(fullName === "" || username === "" || email === "" || password === "")
      return;
    
    let checkUser = false;

    const users = await axios.get("http://localhost:5000/users/");
    
    for(const iuser of users.data){
      if(iuser.username === username || iuser.email === email){
        checkUser = true
        break;
      }
    }
    
    if(checkUser){
      setShowError(true)
      return;
    }
    else{
      const user = await axios.post("http://localhost:5000/users/register", {
      fullName,
      username,
      email,
      password,
      }).catch(err => {console.log(err, setShowError(true))})
      setShowError(false)
      setShowSuccess(true)
      console.log(user)
    }
  }


  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign up
        </Typography>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <TextField
              autoComplete="fname"
              name="fullName"
              variant="outlined"
              required
              fullWidth
              id="fullName"
              label="Full Name"
              autoFocus
              onChange={e => setFullName(e.target.value)}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="username"
              label="UserName"
              name="username"
              autoComplete="uname"
              onChange={e => setUsername(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              onChange={e => setEmail(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => setPassword(e.target.value)}
            />
          </Grid>
          <Grid item xs={12}>
            <FormControlLabel
              control={<Checkbox value="allowExtraEmails" color="primary" />}
              label="I want to receive inspiration, marketing promotions and updates via email."
            />
          </Grid>
        </Grid>
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          className={classes.submit}
          onClick={handleClick}
        >
          Sign Up
        </Button>
        <Grid container justify="flex-end">
          <Grid item>
            <Link to="/login" variant="body2">
              Already have an account? Sign in
            </Link>
          </Grid>
        </Grid>
      </div>
      <Grid>
      {showError ? <div className={classes.root}>
        <Alert variant="outlined" severity="error">
          username or email Already exists! Must be Unique!
        </Alert></div> : ''}
      </Grid>
      <Grid>
      {showSuccess ? <div className={classes.root}>
        <Alert variant="outlined" severity="success">
          User Successfully registered
        </Alert></div> : ''}
      </Grid>
      <Box mt={5}>
        <Copyright />
      </Box>
    </Container>
  );
}
