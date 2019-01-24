import React, { Component } from 'react';


import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Title from '../src/components/Title';
import Gallery from '../src/components/grid/Gallery';

// React router stuff
const Home = () => (
    <div>
        Home
    </div>
);

const About = () => (
    <div>
        About
    </div>
);

const Code = () => (
    <div>
        Code
      <h1>Sammy</h1>
    </div>
);

const Contact = () => (
    <div>
        Contact
    </div>
);

const info = () => (
    <div>
        info
    </div>
);

const MainMenu = () => {
    return (
        <div>
            <Link to="/">
                <button>home</button>
            </Link>
            <Link to="/about">
                <button>About</button>
            </Link>
            <Link to="/code">
                <button>code</button>
            </Link>
            <Link to="/contact">
                <button>contact</button>
            </Link>
            <Link to="/info">
                <button>info</button>
            </Link>
        </div>
    );
};

// React router stuff

class App extends Component {
  render() {
    // return (
    //     <Title />
    // );
    return (
      <Router>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
            Ok, edited. What now?
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <MainMenu/>
        </header>
        <div>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/code" component={Code} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/presence" component={info} />
        </div>
      </div>
      </Router>
    );
  }
}

export default App;
