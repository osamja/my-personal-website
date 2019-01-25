import React, { Component } from 'react';
import './App.css';
import {Route, NavLink, HashRouter} from 'react-router-dom';
import Homepage from '../src/pages/Homepage';
import Books from '../src/pages/Books';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <div className="routes">
                        <Route exact path="/" component={Homepage}/>
                        <Route path="/books" component={Books}/>
                    </div>
                </div>
            </HashRouter>
        );
    }
}

export default App;
