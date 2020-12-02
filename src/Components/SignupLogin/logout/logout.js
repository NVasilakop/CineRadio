import React, { Component } from 'react'


class Logout extends Component {
    // classes = useStyles();

    render() {

        return (
            <button onClick={() => this.props.clickLogout}>LogOut Bitch</button>
        )
    }
}

export default Logout