import React from 'react';
import Gallery from '../components/grid/Gallery';
import {imgUrls} from "../scripts/Gallery/homepage";

export default function Homepage() {
    return (
        <div className="Homepage" style={{color: "#e0e0e0", fontWeight: 200}}>
            <Gallery gridData={imgUrls}/>
        </div>
        
    );
}
