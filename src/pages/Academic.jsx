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
                <h1>
                    Computer Graphics
                </h1>
                <h4>Coming soon</h4>
            </div>

        );
    }
}
