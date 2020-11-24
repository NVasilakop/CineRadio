import React, { Component } from 'react';
import { AppBar, Toolbar, Typography, Button } from '@material-ui/core';
import './cineLanding.css';
import axios from "axios";
import MovieGenre from '../movies/movieGenreCards/movieGenre';
import MovieList from '../movies/movieGenreCards/movieList';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
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

var showMovies = true;

class CineLanding extends Component {
    // [value, setValue] = state.useState(0);
    _isMounted = false;

    constructor() {
        super();
        // this.getMovie();
        this.state = {
            movieGenres: [],
            showMovieGenre: true,
        };
        // this.getMoviesgenreList = this.getMoviesgenreList.bind(this);
        this.getMoviesgenreList();
        // this.handler = this.handler.bind(this)

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
                    movieGenres: response.data.genres,
                });
            }).catch(function (error) {
                console.error(error);
            });

    }
    componentDidMount() {
        this._isMounted = true;
    }

    componentWillUnmount() {
        this._isMounted = false;
    }

    handler = () => {
        // console.log("Movie Genre value is");
        // console.log(movieGenre);
        this.setState({
            showMovieGenre: false,
        }, () => {
            showMovies = this.state.showMovieGenre;
            this.forceUpdate();
        })
        console.log("Το showMovieGenre ειναι");
        console.log(this.state.showMovieGenre);
    }

    render() {
        return (
            /* <Router>
                 <div>
                     <Switch>
                         <Route path="/moviesGenre">
                             { <MoviesGenreList movieGenres={this.getMoviesgenreList()}></MoviesGenreList> }*/
            <div>
                {
                    showMovies ?
                        <div className="row" >
                            {
                                this.state.movieGenres.map((item, index) => {
                                    return <MovieGenre {...item} key={index} handler={this.handler} />
                                })
                            }
                        </div>
                        : <div>
                            <MovieList id={16} />
                        </div>
                }
            </div>
            /*</Route>
        </Switch>
    </div>
</Router>*/
        );
    }
}

export default CineLanding