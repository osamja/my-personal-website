import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {guitar} from "../scripts/Gallery/guitar";
import {guitar2019} from "../scripts/Gallery/guitar";

export default class Movies extends Component {
    render() {
        return (
            <div className="Guitar" style={{color: "white"}}>
              <div className="intro-text" style={{color: "#e0e0e0", fontWeight: 200}}>
                  <h2>Songs learned in 2019</h2>
                  <Gallery gridData={guitar2019}/>
              </div>
              <div className="intro-text" style={{color: "#e0e0e0", fontWeight: 200}}>
                  <h2>Songs learned up to 2018</h2>
                  <Gallery gridData={guitar}/>
              </div>
            </div>
        );
    }
}
