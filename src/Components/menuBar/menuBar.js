import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import LoginSignup from '../SignupLogin/loginSignup';

class MenuBar extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              {/* <IconButton edge="start" color="inherit" aria-label="menu"> */}
              <Button variant="text" color="default">
                Hello
              </Button>
              {/* </IconButton> */}
              <Typography variant="h6">
                {/* <Button variant="text" color="default"> */}
                <Link to="/login" variant="primary" onClick={this.props.loginClicked}>Login</Link>
                {/* </Button> */}
              </Typography>
            </Toolbar>
          </AppBar>
          {/* <Switch> */}
          <Route path="/login">
            <LoginSignup />
          </Route>
          {/* </Switch> */}
        </Router>
      </React.Fragment>
    )
  }
}

export default MenuBar