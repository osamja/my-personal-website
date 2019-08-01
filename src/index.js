import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
require('dotenv').config();

let currentLocation = window.location;

// // Redirect to HTTPS unless localhost
// if (currentLocation.hostname !== "localhost" &&
//     (currentLocation.hostname === "osamjaved.com" ||
//     currentLocation.protocol !== 'https:' ||
//     currentLocation.hostname === "www.osamjaved.com")) {
//     window.location.replace('https://sammyjaved.com');
// }

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
