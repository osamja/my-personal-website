import React, { Component } from 'react';
import './App.css';
import { Route, BrowserRouter } from 'react-router-dom'
import Homepage from '../src/pages/Homepage';
import Books from '../src/pages/Books';
import Photography from '../src/pages/Photography';
import Bio from '../src/pages/Bio';
import Academic from './pages/Academic';
import Movies from './pages/Movies';
import Travel from '../src/pages/Travel';
import Header from '../src/components/Header';
import Projects from '../src/pages/Projects';

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <Header/>
                    <div className="routes">
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/books" component={Books}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/travel" component={Travel}/>
                        <Route path="/photography" component={Photography}/>
                        <Route path="/bio" component={Bio}/>
                        <Route path="/academic" component={Academic}/>
                        <Route path="/movies" component={Movies}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
