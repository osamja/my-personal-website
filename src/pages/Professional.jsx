import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {professional} from "../scripts/Gallery/professional/professional";

export default class Movies extends Component {
  render() {
    return (
      <div className="Professional" style={{color: "white"}}>
        <h1>
          Professional
        </h1>
        <Gallery gridData={professional}/>
      </div>
    );
  }
}
