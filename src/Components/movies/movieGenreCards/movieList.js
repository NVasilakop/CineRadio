import { Component } from 'react';
import './movieList.css';
import axios from 'axios';
import CustomPagination from './../../../Shared/Pagination/pagination';
import Movie from './movie'

var moviesByGenreToShow;
var movieId;
class MovieList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            moviesByGenre: [],
            page: 1,
            pages: 1,
            showMovieDetails: false
        }
        // this.discoverMoviesByGenreClick = this.discoverMoviesByGenreClick.bind(this);

        this.discoverMoviesByGenre(this.state.page);
        // this.getNextMovies(this.state.page);
    }
    // componentWillMount() {
    // }

    hideMovieList = (e) => {
        movieId = e;
        this.setState({
            showMovieDetails: true
        }, () => this.forceUpdate())
    }
    getSpecificMoviesPage = (page) => {
        this.discoverMoviesByGenre(page);
        this.setState({
            page: page
        }, () => {
            this.forceUpdate();
        });
    }

    getNextMovies = () => {
        this.discoverMoviesByGenre(this.state.page + 1);
        this.setState({
            page: this.state.page + 1
        }, () => {
            // moviesByGenreToShow = this.state.moviesByGenre;
            this.forceUpdate();
        }
        )
    }
    getPreviousMovies = () => {
        if (this.state.page > 1) {
            this.discoverMoviesByGenre(this.state.page - 1);
            this.setState({
                page: this.state.page - 1
            }, () => {
                // moviesByGenreToShow = this.state.moviesByGenre;
                this.forceUpdate();
            }
            )
        }
        else {
            this.discoverMoviesByGenre(1);
        }
    }

    discoverMoviesByGenre = (page) => {
        axios.request('https://api.themoviedb.org/3/discover/movie?api_key=0744709c0c9f817d56414c84aae9d5c2&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=' + this.props.id + '&page=' + page)
            // .then(function (response) {
            //     console.log(response.data);
            //     this.setState({
            //         movieGenres: response.data
            //     });
            //     return response.data;
            .then((response) => {
                console.log(response)
                this.setState({
                    moviesByGenre: response.data.results,
                    pages: response.data.total_pages,
                    page: response.data.page
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
            !this.state.showMovieDetails ?
                <div className="bigClass">
                    <div>
                        {this.state.moviesByGenre.map((item, index) => {
                            return <Movie {...item} key={index} hideMovieList={this.hideMovieList} showDetails={false} />
                        })}
                    </div>
                    <div>
                        <CustomPagination getNextMovies={this.getNextMovies} pages={this.state.pages} currentPage={this.state.page}
                            getPreviousMovies={this.getPreviousMovies} getSpecificMoviesPage={this.getSpecificMoviesPage}
                        />
                    </div>
                </div>
                : <div>
                    {/* <CustomPagination getNextMovies={this.getNextMovies} pages={this.state.pages} currentPage={this.state.page}
                        getPreviousMovies={this.getPreviousMovies}
                    /> */}
                    {/* {this.state.moviesByGenre.find(x => { */}
                    <Movie key={movieId} {...this.state.moviesByGenre.find((x) => x.id === movieId)} showDetails={true} />
                    {/* })} */}
                </div>
        )
    }
}

export default MovieList