import React, { Component } from 'react';
import ContentList from "../components/grid/ContentList";
import {shows} from "../scripts/Gallery/shows";

export default class Movies extends Component {
    render() {
        return (
            <div className="Live Events">
                <div className="intro-text" style={{ fontWeight: 200 }}>
                <p>Some live events I've experienced over the years (that I can recall)</p>
                </div>
                <ContentList title="2023" items={shows['2023']}/>
                <ContentList title="2022" items={shows['2022']}/>
            </div>
        );
    }
}
