import React, { Component } from 'react';
import Gallery from "../components/grid/Gallery";
import {travel2018} from "../scripts/Gallery/travel/2018";
import {travel2019} from "../scripts/Gallery/travel/2019";
import {travel2020} from "../scripts/Gallery/travel/2020";
import {
    travel2021,
    travel2022,
} from "../scripts/Gallery/travel/travel";

export default class Travel extends Component {
    render() {
        return (
            <div className="Travel" style={{color: "white", textAlign: 'center'}}>
                <div className="intro-text" style={{color: "#e0e0e0", fontWeight: 200, }}>
                  <h5>
                    "The real voyage of discovery consists, not in seeking new landscapes, but in having new eyes. - Marcel Proust"
                  </h5>
                  
                Countries Visited: 
                {/* Insert amCharts.jpg here instead*/}
                {/* <ul>
                    {countries_visited.map(country => (
                        <li>
                            {country}
                        </li>
                    ))}
                </ul> */}
                </div>
                <h1>
                    2022
                </h1>
                <Gallery gridData={travel2022}/>
                <h1>
                    2021
                </h1>
                <Gallery gridData={travel2021}/>
                <h1>
                    2020
                </h1>
                <Gallery gridData={travel2020}/>
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
