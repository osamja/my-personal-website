import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {movies2019} from "../scripts/Gallery/movies/2019";

export default class Movies extends Component {
    render() {
        return (
            <div className="Movies" style={{color: "white"}}>
                <h1>
                    2019
                </h1>
                <Gallery gridData={movies2019}/>
            </div>
        );
    }
}
