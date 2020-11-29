import React, { Component } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Input from '@material-ui/core/Input';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { withFormik } from 'formik';
import { compose } from '@reduxjs/toolkit';

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
      </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = theme => ({
    paper: {
        marginTop: theme.spacing(8),
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
});


class Login extends Component {
    // classes = useStyles();

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         email: '',
    //         password: ''
    //     };

    // }

    updatePassword = (pass) => {
        this.setState({
            password: pass
        });
        console.log(this.state.password);
    }

    updateEmail = (email) => {
        this.setState({
            email: email
        });
        console.log(this.state.email);
    }

    onSubmit = () => {
        console.log("You are signed In")
    }

    render() {
        const { classes } = this.props;

        return (
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <div className={classes.paper}>
                    <Avatar className={classes.avatar}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                     </Typography>
                    <form className={classes.form} noValidate >
                        <TextField
                            // variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            // value={this.state.email}
                            // onChange={(event) => this.updateEmail(event.target.value)}
                            name={this.props.name}
                        />
                        <TextField
                            // variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            // value={this.state.password}
                            // onChange={(event) => this.updatePassword(event.target.value)}
                            password={this.props.password}
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => { this.onSubmit(); this.props.clickLogin(); }} >
                            Sign In
          </Button>
                        <Grid container>
                            <Grid item xs>
                                <Link href="#" variant="body2">
                                    Forgot password?
              </Link>
                            </Grid>
                            <Grid item>
                                <Link href="#" variant="body2" onClick={this.props.clickToSignup}>
                                    {"Don't have an account? Sign Up"}
                                </Link>
                            </Grid>
                        </Grid>
                    </form>
                </div>
                <Box mt={8}>
                    <Copyright />
                </Box>
            </Container>
        );
    }
}

export default
    // withFormik({
    //     mapPropsToValues: () => ({
    //         email: '',
    //         password: ''
    //     }),
    //     validate: values => {
    //         const errors = {};
    //         Object.keys(values).map(
    //             v => {
    //                 if (!values[v]) {
    //                     errors[v] = "Required";
    //                 }
    //             }
    //         )
    //         return errors;
    //     },
    //     handleSubmit: (values, { setSubmitting }) => {
    //         alert("You have submitted the form");
    //     }
    // })
    withStyles(useStyles)(Login)