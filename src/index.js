import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Title from '../src/components/Title';
import Gallery from '../src/components/grid/Gallery';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
//ReactDOM.render(<Title />, document.getElementById('title-container'));
//ReactDOM.render(<Gallery />, document.getElementById('gallery-container'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
