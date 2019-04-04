import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {computationalPhotography} from "../scripts/Gallery/academic/compPhoto";
import {sideAcademicProjects} from "../scripts/Gallery/academic/side";

export default class Academic extends Component {
    render() {
        return (
            <div className="Academic" style={{color: "white"}}>
                <h1>
                    Computational Photography
                </h1>
                <Gallery gridData={computationalPhotography}/>
                <h1>
                    Fun academic side projects
                </h1>
                <Gallery gridData={sideAcademicProjects} />
                <h1>
                    Computer Graphics
                </h1>
                <h4>Coming soon</h4>
            </div>
        );
    }
}
