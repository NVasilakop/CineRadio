import React, { Component } from 'react'
import Login from '../SignupLogin/login/login'
import Logout from '../SignupLogin/logout/logout'
import SignUp from '../SignupLogin/signUp/signup'


class LoginSignup extends Component {

    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false,
            toSignUp: false,
            email: '',
            password: ''
        };
    }

    clickLogout = () => {
        this.setState({
            loggedIn: false,
            toSignUp: false,
            email: '',
            password: ''
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
                    <Login clickLogin={this.clickLogin} findAvatarName={this.props.clickToTakeLoginData} clickToSignup={this.clickToSignup} email={this.state.email} password={this.state.password} />
                }
                {
                    (this.state.loggedIn) &&
                    <Logout clickLogout={this.clickLogout} />
                }
                {
                    this.state.toSignUp &&
                    <SignUp email={this.state.email} password={this.state.password} />
                }
            </div>
        )
    }
}

export default LoginSignup