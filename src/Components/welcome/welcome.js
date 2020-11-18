import React, { Component } from 'react';
import './welcome.css';
import { Button } from '@material-ui/core';
import CineLanding from '../cineLanding/cineLanding';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import {useRoutes} from 'hookrouter';

const routes = {
  "/": () => <Welcome />,
  "/cineLanding": () => <CineLanding />,
};
// function openRoutes(){
// return useRoutes(routes);
// };


class Welcome extends Component {
  //  routeResult = useRoutes(routes);

  constructor(props) {
    super(props);
    this.state = {
      isShown: false,
      cineButton: false,
      musicButton: false
    };

    // var routes = openRoutes();

    // this.state = {routes:openRoutes()}
  }
  changeButtonFlag = () => {
    this.setState({ isShown: !this.state.isShown })
  };

  pressCineButton = () => {
    this.setState({ cineButton: !this.state.cineButton });
  }

  pressMusicButton = () => {
    this.setState({ musicButton: !this.state.musicButton });
  }
  render() {
    // <div className={this.state.isShown?"":""}>         

    // const routeResult = useRoutes(routes);
    return (
      <div>
        <div> {this.state.cineButton && (
          <CineLanding></CineLanding>
        )}
        </div>
        {(!this.state.cineButton && !this.state.musicButton) && (
          <div>
            <Router>
              {/* <div id={this.state.cineButton || this.state.musicButton?"cineMusic":""}> */}
              <div id={!this.state.isShown ? "cineImg" : "cineImg1V2"} className="parallax"
                onMouseEnter={() => this.changeButtonFlag()}
                onMouseLeave={() => this.changeButtonFlag()}>

                {this.state.isShown && (
                  <div className="cineImg2">
                    <div className="left-panel">
                    </div>
                    <div className="right-panel">

                    </div>
                    <div className="content">
                      <Button id="cineButton">
                        <Link onClick={() => this.pressCineButton()} to="/cine">
                          Go To Cine
                     </Link>
                      </Button>
                      <Route path="/cine" component={CineLanding} />
                    </div>
                  </div>
                )}
              </div>
              <div className="midText">
                <h3 style={{ "text-align": "center" }}>CineMusic</h3>
                <p>
                  Movie Trailers combined with Soundtrack music or Not?
          </p>
              </div>
              <div id="musicImg" className="parallax">
                <div>
                </div>
              </div>
              {/* </div> */}
            </Router>
          </div>
        )}
      </div>
    );
  }
}

export default Welcome