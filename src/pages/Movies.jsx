import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {movies2019} from "../scripts/Gallery/movies/2019";

export default class Movies extends Component {
    render() {
        return (
            <div className="Movies" style={{color: "white"}}>
              <div className="intro-text" style={{color: "#e0e0e0", fontWeight: 200}}>
                <p>Ok, people have said it's ridiculous to count movies here like it's some achievement.
                But I might as well be tracking this information :)</p>
              </div>
                <h1>
                    2019
                </h1>
                <Gallery gridData={movies2019}/>
            </div>
        );
    }
}
