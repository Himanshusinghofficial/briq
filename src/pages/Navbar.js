import React from 'react';
import { AppBar, Typography, Toolbar, Button } from '@material-ui/core';
import { Link, useLocation } from 'react-router-dom';

import useStyles from './styles';

const Navbar = () => {
  const classes = useStyles();
  const location = useLocation();
  
  return (
    <AppBar className={classes.appBar} position="fixed" color="inherit">
      <div className={classes.brandContainer}>
        <Typography component={Link} to="/" className={classes.heading} variant="h6" align="center">Author Quotes</Typography>
      </div>
      <Toolbar className={classes.toolbar}>
        {location.pathname==='/'?
        <Button component={Link} to="/fav" variant="contained" color="secondary">Rated</Button>
        :
        <Button component={Link} to="/" variant="contained" color="secondary">Home</Button>
        }
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;