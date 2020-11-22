import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Welcome from './Components/welcome/welcome'
import MenuBar from './Components/menuBar/menuBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router } from 'react-router-dom';
import CineLanding from './Components/cineLanding/cineLanding';
import MovieGenre from './Components/movies/movieGenreCards/movieGenre';
import RouteWithSubRoutes from './Shared/RouteService';

/* <React.StrictMode>
</React.StrictMode> */


// {
//   path: '/music',
//   component: Tacos,
// }

ReactDOM.render(
  <div>
    <Router>
      <div>
        <MenuBar />
      </div>
      <div style={{ marginTop: '70px' }}>
        <React.Fragment>
          <Welcome />
        </React.Fragment>
        {/* <RouteWithSubRoutes path='/welcome' /> */}
        {/* <Welcome /> */}
      </div>
    </Router>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
