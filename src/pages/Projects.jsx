import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {projects} from "../scripts/Gallery/projects";

export default class Projects extends Component {
    render() {
        return (
            <div className="intro-text" style={{color: "#e0e0e0", fontWeight: 200}}>
            <p>Here are some side projects I've worked on in the past.</p>
            <Gallery gridData={projects}/>
            </div>
        );
    }
}
