import React, { Component } from 'react';
import Gallery from '../components/grid/Gallery';
import { julyPhotography2019 } from '../scripts/Gallery/photography/2019/july';

export default class Photography extends Component {
    render() {
        return (
          <div className="Photography">
              <div className="intro-text" style={{ fontWeight: 200 }}> 
              </div>
              <h1>
                  2019
              </h1>
              <h3>
                July
              </h3>
              <Gallery gridData={julyPhotography2019}/>
          </div>
      );
    }
}
