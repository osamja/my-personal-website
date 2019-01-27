import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {imgUrls} from "../scripts/Gallery/projects";

export default class Projects extends Component {
    render() {
        return (
            <Gallery gridData={imgUrls}/>
        );
    }
}