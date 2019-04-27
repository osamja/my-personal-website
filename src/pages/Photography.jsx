import React, { Component } from 'react';
import Gallery from '../components/grid/Gallery';
import {imgUrls} from '../scripts/Gallery/photography';

export default class Photography extends Component {
    render() {
        return (
          <div className="intro-text" style={{color: "#e0e0e0", fontWeight: 200}}>
            <p>Here are some photos.  Will try to update this frequently in the future.  </p>
            <Gallery gridData={imgUrls}/>
          </div>
        );
    }
}
