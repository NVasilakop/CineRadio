import  React,{Component} from 'react';
import {AppBar,Toolbar,Typography,Button}  from '@material-ui/core';

class MenuBar extends Component{ 
    render(){
        return (
            <React.Fragment>
          <AppBar position="fixed" color="primary">
            <Toolbar>
              {/* <IconButton edge="start" color="inherit" aria-label="menu"> */}
              <Button variant="text" color="default">
                Hello
              </Button>
              {/* </IconButton> */}
              <Typography variant="h6">
                
              </Typography>
            </Toolbar>
          </AppBar>
          </React.Fragment>
        );
    }
}

export default MenuBar