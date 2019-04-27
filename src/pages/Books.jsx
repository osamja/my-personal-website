import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {books2019} from "../scripts/Gallery/books/2019";
import {books2018} from "../scripts/Gallery/books/2018";
import {imgUrls} from "../scripts/Gallery/projects";

export default class Homepage extends Component {
    render() {
        return (
            <div className="Books" style={{color: "white"}}>
                <div className="intro-text" style={{color: "#e0e0e0", fontWeight: 200}}>
                  <p>Here are books I've read in the years listed.  I'm trying to read one book per month</p>
                </div>
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
