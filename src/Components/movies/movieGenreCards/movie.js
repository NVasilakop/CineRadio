import './movie.css'
import React, { Component } from 'react';
import axios from 'axios';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import { withStyles } from '@material-ui/core/styles';
import MovieDetails from './../movieCard/movieDetails';
import { waitFor } from '@testing-library/react';
import { delayAdapterEnhancer } from 'axios-delay';

const useStyles = theme => ({
    root: {
        maxWidth: 345,
    },
});

class Movie extends Component {
    // [value, setValue] = state.useState(0);
    componentWillReceiveProps(nextProps) {
        this.state = {
            movieTitle: nextProps.title,
            backPoster: '',
            showMovieDetails: false,
            movieDetails: Object,
            showMovieCard: false,
            showImg: false,

        }
        this.fetchBackPoster();
    }

    constructor(props) {
        super(props);
        this.state = {
            movieTitle: props.title,
            backPoster: '',
            showMovieDetails: this.props.showDetails ? true : false,
            movieDetails: Object,
            showMovieCard: false,
            showImg: false

        }
        this.fetchBackPoster();
        if (this.state.showMovieDetails && this.props.showDetails) {
            this.getMovieDetails();
        }
    }
    api = axios.create({
        adapter: delayAdapterEnhancer(axios.defaults.adapter)
    });


    onLoad = () => {
        this.setState({
            showImg: true
        })
    }
    fetchBackPoster = () => {
        this.api.get('https://image.tmdb.org/t/p/w300' + this.props.poster_path, { delay: 5000 })
            .then((response) => {
                console.log(response);
                this.setState({
                    backPoster: response.config.url,
                    showImg: true,
                }, () => {
                    this.forceUpdate();
                })
            }).catch(function (error) {
                console.error(error);
            });

    }

    getMovieDetails = (backPoster) => {
        this.api.get('https://api.themoviedb.org/3/movie/' + this.props.id + '?api_key=0744709c0c9f817d56414c84aae9d5c2&language=en-US', { delay: 2000 })
            .then((response) => {
                console.log(response)
                this.setState({
                    // overviewTitle: response.overview,
                    movieDetails: response.data,
                    showMovieDetails: true
                }, () => {
                    console.log("MovieDetails ");
                    console.log(this.state.movieDetails);
                    this.forceUpdate();
                })
            }).catch(function (error) {
                console.error(error);
            });
    }

    goToMovieDetails = () => {
        this.state.setState({
            showMovieDetails: true
        });
        this.props.hideMovieList();
    }
    render() {
        const { classes } = this.props;
        return (
            <div>
                {!this.props.showDetails && !this.state.showMovieDetails ?
                    <div>
                        <div>{!this.state.showMovieDetails &&
                            <Card className={classes.root}>
                                <CardActionArea>
                                    {this.state.showImg &&
                                        <CardMedia
                                            component="img"
                                            alt="Contemplative Reptile"
                                            height="120"
                                            image={this.state.backPoster}
                                            title="Contemplative Reptile"
                                        />}
                                    <CardContent>
                                        <Typography gutterBottom variant="h5" component="h2">
                                            {this.props.original_title}
                                        </Typography>
                                        <Typography variant="body2" color="textSecondary" component="p">
                                        </Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>
                                    <Button size="small" color="primary">
                                        Share
                                    </Button>
                                    {/* onClick={this.getMovieDetails} */}
                                    <Button id={this.props.id} size="small" color="primary" onClick={() => { this.getMovieDetails(); this.props.hideMovieList(this.props.id) }} >
                                        Learn More
                                 </Button>
                                </CardActions>
                            </Card>
                        }</div>
                    </div>
                    /* { <div>{this.state.showMovieDetails &&
                         <MovieDetails details={this.state.movieDetails} />
                     }
                     </div> }*/
                    : null
                }
                {
                    this.props.showDetails && this.state.showMovieDetails &&
                    <MovieDetails details={this.state.movieDetails} backgroundPoster={'https://image.tmdb.org/t/p/original' + this.props.poster_path} />
                }
            </div>
        )
    }
}

export default withStyles(useStyles)(Movie)