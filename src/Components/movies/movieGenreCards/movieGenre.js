import React, { Component } from 'react';
// import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import axios from "axios";
import { Button } from 'react-bootstrap'
import Card from 'react-bootstrap/Card'
import './movieGenre.css';
import { useHistory } from 'react-router-dom';
import MovieList from './movieList';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

// const history = useHistory();


class MovieGenre extends Component {
    // [value, setValue] = state.useState(0);
    constructor(props) {
        super(props);
        this.state = {
            // moviesByGenre: [],
            goToMovie: false
        }
        this.discoverMoviesByGenreClick = this.discoverMoviesByGenreClick.bind(this);
    }

    discoverMoviesByGenreClick(e) {
        e.preventDefault();
        console.log('The link was clicked.');
        this.setState({
            // moviesByGenre: response.data.genres,
            goToMovie: true
        });
        // history.push('/movies');
        this.discoverMoviesByGenre();
        // this.props.handler;
        // console.log("PROPS HANDLER IS")


    }
    discoverMoviesByGenre = () => {
        axios.request('https://api.themoviedb.org/3/discover/movie?api_key=0744709c0c9f817d56414c84aae9d5c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + this.props.id)
            // .then(function (response) {
            //     console.log(response.data);
            //     this.setState({
            //         movieGenres: response.data
            //     });
            //     return response.data;
            .then((response) => {
                // console.log(response.data.genres);
                this.setState({
                    // moviesByGenre: response.data.genres,
                    goToMovie: true,
                });
            }).catch(function (error) {
                console.error(error);
            });

    }
    render() {


        let button;
        console.log("Το state einai");
        console.log(this.state);
        // if (this.state.goToMovie) {
        //     button = <div>
        //         {/* <MovieList id={this.props.id} /> */}
        //         <Route path="/cine/movieGenre">
        //             <CineLanding />
        //         </Route>

        //     </div>;
        // }
        // else {
        button = <Link to={"/cine/" + this.props.name.toLowerCase()} variant="primary" onClick={() => this.props.handler(this.props.id)}>Check me</Link>;
        // }
        return (

            // <div className="movieName">
            //     <span>{this.props.name}</span>
            // </div>);
            <div>

                {
                    !this.state.goToMovie &&
                    <div>
                        <Card style={{ width: '18rem' }}>
                            {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                            <Card.Body id={this.props.name.toLowerCase()}>
                                <Card.Title>{this.props.name}</Card.Title>
                                {button}
                            </Card.Body>
                        </Card>
                    </div>
                }

                {/* {this.state.goToMovie &&
                    <div>
                        <MovieList id={this.props.id} />
                    </div>} */}
            </div>
        )
    }
}

export default MovieGenre