import React, { Component } from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import axios from "axios";
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './movieGenre.css';
class MovieGenre extends Component {
    // [value, setValue] = state.useState(0);

    constructor(props) {
        super();
    }

    render() {
        return (

            // <div className="movieName">
            //     <span>{this.props.name}</span>
            // </div>);
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body id={this.props.name.toLowerCase()}>
                    <Card.Title>{this.props.name}</Card.Title>
                    {/* <Card.Text>
                        Some quick example text to build on the card title and make up the bulk of
                        the card's content.
    </Card.Text> */}
                    <Button variant="primary">Check me</Button>
                </Card.Body>
            </Card>
        )
    }
}

export default MovieGenre