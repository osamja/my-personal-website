import React, { Component } from 'react';
import ContentList from "../components/grid/ContentList";
import {movies2019} from "../scripts/Gallery/movies/2019";
import {movies2020} from "../scripts/Gallery/movies/2020";
import {movies} from "../scripts/Gallery/movies/movies";

export default class Movies extends Component {
    render() {
        return (
            <div className="Movies" style={{color: "white"}}>
                <div className="intro-text" style={{color: "#e0e0e0", fontWeight: 200}}>
                <p>Movies I've watched over the years (that I can recall)</p>
                </div>
                <ContentList title="2022" items={movies['2022']}/>
                <ContentList title="2021" items={movies['2021']}/>
                <ContentList title="2020" items={movies2020}/>
                <ContentList title="2019" items={movies2019}/>
            </div>
        );
    }
}
