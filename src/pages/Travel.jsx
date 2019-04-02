import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {travel2018} from "../scripts/Gallery/travel/2018";
import {travel2019} from "../scripts/Gallery/travel/2019";

export default class Travel extends Component {
    render() {
        return (
            <div className="Travel" style={{color: "white"}}>
                <h2>
                    "The real voyage of discovery consists, not in seeking new landscapes, but in having new eyes." - Marcel Proust
                </h2>
                <h1>
                    2019
                </h1>
                <Gallery gridData={travel2019}/>
                <h1>
                    2018
                </h1>
                <Gallery gridData={travel2018}/>
            </div>
        );
    }
}
