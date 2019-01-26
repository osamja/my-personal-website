import React, { Component } from 'react';
import './App.css';
import {Route, HashRouter} from 'react-router-dom';
import Homepage from '../src/pages/Homepage';
import Books from '../src/pages/Books';
import Photography from '../src/pages/Photography';
import Travel from '../src/pages/Travel';
import Header from '../src/components/Header';
import Projects from '../src/pages/Projects';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Header/>
                    <div className="routes">
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/books" component={Books}/>
                        <Route path="/projects" component={Projects}/>
                        <Route path="/travel" component={Travel}/>
                        <Route path="/photography" component={Photography}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
