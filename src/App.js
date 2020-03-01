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
import ImageMorpher from './pages/projects/Image-Morpher/ImageMorpher';
import TheRise from '../src/pages/TheRise';

class App extends Component {
    render() {
        return (
        <BrowserRouter>
                <div className="App">
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
                        <Route exact path="/projects/image-morpher" component={ImageMorpher}/>
                        <Route exact path="/imscrewed" component={TheRise}/>
                    </div>
                </div>
            </BrowserRouter>
        );
    }
}

export default App;
