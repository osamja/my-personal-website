import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {imgUrls} from "../scripts/Gallery/academic/academic";

export default class Academic extends Component {
    render() {
        return (
            <div className="Academic" style={{color: "white"}}>
                <h1>
                    Computational Photography
                </h1>
                <Gallery gridData={imgUrls}/>
            </div>

        );
    }
}
