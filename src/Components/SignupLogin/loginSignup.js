import React, { Component } from 'react'
import Login from '../SignupLogin/login/login'
import Logout from '../SignupLogin/logout/logout'
import SignUp from '../SignupLogin/signUp/signup'


class LoginSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            toSignUp: false
        };
    }

    clickLogout = () => {
        this.setState({
            loggedIn: false,
            toSignUp: false
        })
    }

    clickToSignup = () => {
        this.setState({
            loggedIn: false,
            toSignUp: true
        })
    }

    clickLogin = () => {
        this.setState({
            loggedIn: true,
            toSignUp: false
        })
    }

    render() {
        return (
            <div>
                { !this.state.toSignup &&
                    <Login clickLogin={this.clickLogin} clickToSignup={this.clickToSignup} />
                }
                {
                    (this.state.loggedIn) &&
                    <Logout clickLogout={this.clickLogout} />
                }
                {
                    this.state.toSignUp &&
                    <SignUp />
                }
            </div>
        )
    }
}

export default LoginSignup