import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Homepage from '../src/pages/Homepage';

class App extends Component {
    render() {
        return (
            <Router>
              <div className="App">
                  <Homepage/>
              </div>
            </Router>
        );
    }
}

export default App;
