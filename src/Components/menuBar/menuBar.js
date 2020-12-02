import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import { Switch, Route, BrowserRouter as Router, Link } from 'react-router-dom';
import LoginSignup from '../SignupLogin/loginSignup';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';


const useStyles = theme => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
    },
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
});
class MenuBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      avatarName: '',
      avatarImg: ''
    }
  }

  updateAvatarName = (avatName, avImg) => {
    this.setState({
      avatarName: avatName,
      avatarImg: avImg
    }, () => this.forceUpdate());
  }

  render() {
    const { classes } = this.props;

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
              <Avatar src={this.state.avatarImg} className={classes.large} />
            </Toolbar>
          </AppBar>
          {/* <Switch> */}
          <Route path="/login">
            <LoginSignup clickToTakeLoginData={this.updateAvatarName} />
          </Route>
          {/* </Switch> */}
        </Router>
      </React.Fragment>
    )
  }
}

export default withStyles(useStyles)(MenuBar)