import React, { Component } from 'react';
import ContentList from "../components/grid/ContentList";
import {shows} from "../scripts/Gallery/shows";

export default class Movies extends Component {
    render() {
        return (
            <div className="Live Events" style={{color: "white"}}>
                <div className="intro-text" style={{color: "#e0e0e0", fontWeight: 200}}>
                <p>Some live events I've experienced over the years (that I can recall)</p>
                </div>
                <ContentList title="2022" items={shows['2022']}/>
            </div>
        );
    }
}
