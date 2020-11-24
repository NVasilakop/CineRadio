import React, { Component } from 'react'
import axios from 'axios';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
        };
    }

    render() {
        return (
            <div>
                {this.props.details.overview}
            </div>
        )
    }
}


export default MovieDetails