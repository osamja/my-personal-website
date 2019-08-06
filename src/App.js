import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import Homepage from '../src/pages/Homepage';
import Books from '../src/pages/Books';
import Photography from '../src/pages/Photography';
import Bio from '../src/pages/Bio';
import Academic from './pages/Academic';
import Movies from './pages/Movies';
import Guitar from './pages/Guitar';
import Professional from './pages/Professional';
import Travel from '../src/pages/Travel';
import Header from '../src/components/Header';
import Projects from '../src/pages/Projects';
import MyPersonalWebsite from '../src/pages/projects/MyPersonalWebsite';

const injectGA = () => {
    if (typeof window == 'undefined' || process.env.REACT_APP_ENV !== 'production') {
      return;
    }
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());

    gtag('config', 'UA-138249100-1');
  };

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                {/* Global site tag (gtag.js) - Google Analytics */}
                <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138249100-1"/>
                <script>{injectGA()}</script>
                    <Header/>
                    <div className="routes">
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/books" component={Books}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route exact path="/travel" component={Travel}/>
                        <Route exact path="/photography" component={Photography}/>
                        <Route exact path="/bio" component={Bio}/>
                        <Route exact path="/academic" component={Academic}/>
                        <Route exact path="/movies" component={Movies}/>
                        <Route exact path="/guitar" component={Guitar}/>
                        <Route exact path="/professional" component={Professional}/>
                        <Route exact path="/projects/my-personal-website" component={MyPersonalWebsite}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
