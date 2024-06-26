import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {computationalPhotography} from "../scripts/Gallery/academic/compPhoto";
import {sideAcademicProjects} from "../scripts/Gallery/academic/side";
import {graphicsImages} from "../scripts/Gallery/academic/graphics";
import {coursesAcademicProjects} from "../scripts/Gallery/academic/courses";

export default class Academic extends Component {
    render() {
        return (
            <div className="Academic" style={{color: "white"}}>
                <h1>
                  Self-Paced Courses
                </h1>
                <Gallery gridData={coursesAcademicProjects} />
                <h1>
                  Computer Graphics
                </h1>
                <Gallery gridData={graphicsImages} />
                <h1>
                    Computational Photography
                </h1>
                <Gallery gridData={computationalPhotography}/>
                <h1>
                    Academic side projects
                </h1>
                <Gallery gridData={sideAcademicProjects} />
            </div>
        );
    }
}
