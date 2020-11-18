import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Welcome from './Components/welcome/welcome'
import MenuBar from './Components/menuBar/menuBar';
import 'bootstrap/dist/css/bootstrap.min.css';

/* <React.StrictMode>
</React.StrictMode> */
ReactDOM.render(

  <div>
    <div>
      <MenuBar />
    </div>
    <div style={{ marginTop: '70px' }}>
      <React.Fragment>
        <Welcome />
      </React.Fragment>
    </div>
  </div>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
