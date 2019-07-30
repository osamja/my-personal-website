import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {guitar} from "../scripts/Gallery/guitar";

export default class Movies extends Component {
    render() {
        return (
            <div className="Guitar" style={{color: "white"}}>
              <div className="intro-text" style={{color: "#e0e0e0", fontWeight: 200}}>
              </div>
                <Gallery gridData={guitar}/>
            </div>
        );
    }
}
