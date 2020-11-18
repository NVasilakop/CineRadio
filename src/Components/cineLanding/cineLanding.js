import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import './cineLanding.css';
import axios from "axios";
import MovieGenre from '../movies/movieGenreCards/movieGenre';
// import MoviesGenreList from "../movies/movieGenreCards/movieGenreList"


var apiMovieKey = 'https://api.themoviedb.org/3/movie/550?api_key=0744709c0c9f817d56414c84aae9d5c2';

var options = {
    method: 'GET',
    url: 'https://movie-database-imdb-alternative.p.rapidapi.com/',
    params: { s: 'Avengers Endgame', page: '1', r: 'json' },
    headers: {
        'x-rapidapi-key': 'd2f55b4670mshe0b55802ecb2ca5p178eacjsnc0dae081b9b0',
        'x-rapidapi-host': 'movie-database-imdb-alternative.p.rapidapi.com'
    }
};


class CineLanding extends Component {
    // [value, setValue] = state.useState(0);
    _isMounted = false;

    constructor() {
        super();
        // this.getMovie();
        this.state = {
            movieGenres: []
        };
        // this.getMoviesgenreList = this.getMoviesgenreList.bind(this);
        this.getMoviesgenreList();
    }

    getMovie() {
        axios.request(options).then(function (response) {
            console.log(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }

    getMoviesgenreList = () => {
        axios.request('https://api.themoviedb.org/3/genre/movie/list?api_key=0744709c0c9f817d56414c84aae9d5c2&language=en-US')
            // .then(function (response) {
            //     console.log(response.data);
            //     this.setState({
            //         movieGenres: response.data
            //     });
            //     return response.data;
            .then((response) => {
                console.log(response.data.genres);
                this.setState({
                    movieGenres: response.data.genres
                });
            }).catch(function (error) {
                console.error(error);
            });

    }
    componentDidMount() {
        this._isMounted = true;

        // if (this._isMounted) {
        //     this.setState({
        //         movieGenres: this.getMoviesgenreList()
        //     });
        //     console.log(this.state.movieGenres);

    }

    componentWillUnmount() {
        this._isMounted = false;
    }
    render() {
        return (

            // <MoviesGenreList movieGenres={this.getMoviesgenreList()}></MoviesGenreList>
            <div className="row">
                {this.state.movieGenres.map((item, index) => {
                    return <MovieGenre {...item} key={index} />
                })}
            </div>
        );
    }
}

export default CineLanding