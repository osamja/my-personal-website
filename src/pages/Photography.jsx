import React, { Component } from 'react';
import Gallery from '../components/grid/Gallery';
import {imgUrls} from '../scripts/Gallery/photography';

export default class Photography extends Component {
    render() {
        return (
        <Gallery gridData={imgUrls}/>
        );
    }
}
