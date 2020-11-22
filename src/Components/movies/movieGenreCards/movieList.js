import { Component } from 'react';
import './movieList.css';
import axios from 'axios';
import CustomPagination from './../../../Shared/Pagination/pagination';

var moviesByGenreToShow;
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesByGenre: []
        }
        // this.discoverMoviesByGenreClick = this.discoverMoviesByGenreClick.bind(this);
        this.discoverMoviesByGenre();


    }
    // componentWillMount() {
    // }

    discoverMoviesByGenre = () => {
        axios.request('https://api.themoviedb.org/3/discover/movie?api_key=0744709c0c9f817d56414c84aae9d5c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + this.props.id)
            // .then(function (response) {
            //     console.log(response.data);
            //     this.setState({
            //         movieGenres: response.data
            //     });
            //     return response.data;
            .then((response) => {
                console.log(response)
                this.setState({
                    moviesByGenre: response.data.results
                }, () => {
                    // moviesByGenreToShow = this.state.moviesByGenre;
                    this.forceUpdate();
                })
                console.log("Movie List");
            }).catch(function (error) {
                console.error(error);
            });

    }
    render() {
        return (
            // <div>

            // </div>
            <div className="bigClass">
                <div>
                    {this.state.moviesByGenre.map((item, index) => {
                        // return <MovieGenre {...item} key={index} />
                        <div className="row" key={index}>
                            <div>
                                {item.title}
                            </div>
                        </div>
                    })}
                </div>
                <div>
                    <CustomPagination />
                </div>
            </div>

        )
    }
}

export default MovieList