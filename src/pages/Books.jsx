import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {books2019} from "../scripts/Gallery/books/2019";
import {books2018} from "../scripts/Gallery/books/2018";

export default class Homepage extends Component {
    render() {
        return (
            <div className="Books" style={{color: "white"}}>
                <h1>
                    2019
                </h1>
                <Gallery gridData={books2019}/>
                <h1>
                    2018
                </h1>
                <Gallery gridData={books2018}/>
            </div>
        );
    }
}
