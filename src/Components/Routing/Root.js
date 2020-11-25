import { Component } from 'react';
import './movieList.css';
import axios from 'axios';
import CustomPagination from './../../../Shared/Pagination/pagination';
import Movie from './movie'
import { render } from '@testing-library/react';

var moviesByGenreToShow;
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesByGenre: [],
            page: 1,
            pages: 1
        }

        render(){
            return (
                <div>
                    <h3>Home</h3>
                    <button onClick={this.handleClick}>
                    </button>
                </div>
            )
        }
    }
}

export default Root