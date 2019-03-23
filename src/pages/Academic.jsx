import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {imgUrls} from "../scripts/Gallery/academic/academic";

export default class Academic extends Component {
    render() {
        return (
            <Gallery gridData={imgUrls}/>
        );
    }
}
