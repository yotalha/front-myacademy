import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { userLoggedOut } from '../../actions';
import { Link } from 'react-router-dom';


const Dashboard = () => {
  const user = useSelector(state => state.userLogin);
  const dispatch = useDispatch();

  return(
    <Grid>
      <Typography>Hello {user.fullName}</Typography>
      <Link to="/login">
        <Button onClick={() => dispatch(userLoggedOut())}>signout</Button>
      </Link>
    </Grid>
  )
}

export default Dashboard;