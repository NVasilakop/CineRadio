import { render } from '@testing-library/react';
import React, { Component } from 'react'
import axios from 'axios';
import SearchBar from "material-ui-search-bar";

const client_id = '39ee4650c1cd45179aaedce625da8d90'; // Your client id
const client_secret = '0a6dd5d9400a40ca9f3d6bfb1727288a'; // Your secret
const redirect_uri = 'http://localhost:3000/cine'; // Your redirect uri

const scopes = 'user-read-private user-read-email user-read-recently-played';

class MusicLanding extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }
    }


    render() {
        return (
            <SearchBar
                value={this.state.value}
                onChange={(newValue) => { this.setState({ value: newValue }); console.log(newValue) }}
            // onRequestSearch={() => doSomethingWith(this.state.value)}
            />
        );
    }
}
export default MusicLanding