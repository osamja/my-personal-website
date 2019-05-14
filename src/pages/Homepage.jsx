import React, { Component } from 'react';
import Gallery from '../components/grid/Gallery';
import {imgUrls} from '../scripts/Gallery/homepage';

export default class Homepage extends Component {
    render() {
        return (
            <div className="Homepage" style={{color: "#e0e0e0", fontWeight: 200}}>
                <Gallery gridData={imgUrls} />
            </div>
        );
    }
}
