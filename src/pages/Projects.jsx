import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {projects} from "../scripts/Gallery/projects";

export default class Projects extends Component {
    render() {
        return (
            <Gallery gridData={projects}/>  
        );
    }
}
