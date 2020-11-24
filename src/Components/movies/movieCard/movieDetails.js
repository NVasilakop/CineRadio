import React, { Component } from 'react'
import axios from 'axios';
import Youtube from 'react-youtube';

class MovieDetails extends Component {
    constructor(props) {
        super(props);
        console.log(props);
        this.state = {
            trailer: ''
        };
        this.getMovieTrailer();
    }

    getMovieTrailer = () => {
        axios.request('https://api.themoviedb.org/3/movie/' + this.props.details.id + '/videos?api_key=0744709c0c9f817d56414c84aae9d5c2&language=en-US')
            // .then(function (response) {
            //     console.log(response.data);
            //     this.setState({
            //         movieGenres: response.data
            //     });
            //     return response.data;
            .then((response) => {
                console.log(response)
                this.setState({
                    // trailer: 'https://www.youtube.com/embed/' + response.data.results[0].key + '&output=embed',
                    trailer: response.data.results[0].key
                }, () => {
                    // moviesByGenreToShow = this.state.moviesByGenre;
                    this.forceUpdate();
                })
                console.log("Movie List");
            }).catch(function (error) {
                console.error(error);
            });
    }

    _onReady(event) {
        // access to player in all event handlers via event.target
        event.target.pauseVideo();
    }
    render() {
        const opts = {
            height: '390',
            width: '640',
            playerVars: {
                // https://developers.google.com/youtube/player_parameters
                autoplay: 1,
            },
        };

        return (
            <div>
                <div>
                    {this.props.details.overview}
                </div>
                {/* <iframe width="420" height="315"
                    src={this.state.trailer}>
                </iframe> */}
                <Youtube videoId={this.state.trailer} opts={opts} onReady={this._onReady} />

            </div>
        )
    }
}


export default MovieDetails