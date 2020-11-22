import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import CineLanding from '../Components/cineLanding/cineLanding';
import MovieGenre from '../Components/movies/movieGenreCards/movieGenre';
import Welcome from '../Components/welcome/welcome';
import './RouteService.css';

class RouteWithSubRoutes extends Component {
    route = {};

    routes = [
        {
            path: '/cine',
            component: CineLanding
        },
        {
            path: '/cine/movieGenre',
            component: MovieGenre
        },
        {
            path: '/welcome',
            component: Welcome
        }
    ]
    // RouteWithSubRoutes = (route) => (
    //     <Route path={route.path} render={(props) => (
    //         <route.component {...props} routes={route.routes} />
    //     )} />
    // )
    constructor(props) {
        super(props);
        console.log(this.props);
        console.log(this.routes);

        this.route = this.routes.find(rout => rout.path === this.props.path);
        // this.props.index = this.route.path;
    }

    render() {
        return (
            <div>
                {/* <Route key={this.route.path} path={this.route.path} component={this.route.component}
                // render={(props) => (
                // <route.component {...props} />
                // )
                /> */}
                {/* <Route render={props => (

                    <Component  {...props} />
                )} />
                ); */}
                <Switch>
                    <Route exact path="/welcome">
                        <Welcome />
                    </Route>
                    <Route path="/cine">
                        <CineLanding />
                    </Route>
                    <Route path="/cine/movieGenre">
                        <MovieGenre />
                    </Route>

                </Switch>

            </div>
        )
    }
}

export default RouteWithSubRoutes