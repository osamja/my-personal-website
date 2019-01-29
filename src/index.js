import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

let currentLocation = window.location;

if (currentLocation.hostname === "osamjaved.com") {
    window.location.replace('https://sammyjaved.com');
}

if (location.protocol != 'https:') {
	window.location.replace('https://sammyjaved.com');
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
