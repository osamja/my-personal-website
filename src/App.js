import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom'
import Homepage from '../src/pages/Homepage';
import Books from '../src/pages/Books';
import Photography from '../src/pages/Photography';
import Bio from '../src/pages/Bio';
import Journal from '../src/pages/Journal';
import Academic from './pages/Academic';
import Movies from './pages/Movies';
import Shows from './pages/Shows';
import Guitar from './pages/Guitar';
import Professional from './pages/Professional';
import Travel from '../src/pages/Travel';
import Header from '../src/components/Header';
import Projects from '../src/pages/Projects';
import MyPersonalWebsite from '../src/pages/projects/MyPersonalWebsite';
import ImageMorpher from './pages/projects/Image-Morpher/ImageMorpher';
import PrivacyPolicy from '../src/pages/projects/Image-Morpher/PrivacyPolicy';
import Japan23 from '../src/pages/Japan';

class App extends Component {
    render() {
        return (
            <div className="App">
                    <Header/>
                    <div className="routes">
                        <Route exact path="/" component={Homepage}/>
                        <Route exact path="/books" component={Books}/>
                        <Route exact path="/projects" component={Projects}/>
                        <Route exact path="/travel" component={Travel}/>
                        <Route exact path="/photography" component={Photography}/>
                        <Route exact path="/bio" component={Bio}/>
                        <Route exact path="/journal" component={Journal}/>
                        <Route exact path="/academic" component={Academic}/>
                        <Route exact path="/movies" component={Movies}/>
                        <Route exact path="/shows" component={Shows}/>
                        <Route exact path="/guitar" component={Guitar}/>
                        <Route exact path="/professional" component={Professional}/>
                        <Route exact path="/projects/my-personal-website" component={MyPersonalWebsite}/>
                        <Route exact path="/projects/image-morpher" component={ImageMorpher}/>
                        <Route exact path="/privacy" component={PrivacyPolicy}/>
                        <Route exact path="/japan" component={Japan23}/>
                    </div>
                </div>
        );
    }
}

export default App;
