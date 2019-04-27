import React, { Component } from 'react';
import Gallery from '../components/grid/Gallery';
import {imgUrls} from '../scripts/Gallery/homepage';

export default class Homepage extends Component {
    render() {
        return (
            <div className="Homepage" style={{color: "#e0e0e0", fontWeight: 200}}>
                <p>Hey there! Welcome to my website.</p>
                <p>Click on a grid item to see more</p>
                <Gallery gridData={imgUrls} />
            </div>
        );
    }
}
