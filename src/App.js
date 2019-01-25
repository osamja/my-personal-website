import React, { Component } from 'react';
import './App.css';
import {Route, HashRouter} from 'react-router-dom';
import Homepage from '../src/pages/Homepage';
import Books from '../src/pages/Books';
import Header from '../src/components/Header';

class App extends Component {
    render() {
        return (
            <HashRouter>
                <div className="App">
                    <Header/>
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
