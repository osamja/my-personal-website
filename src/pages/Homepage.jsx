import React from 'react';
import Gallery from '../components/grid/Gallery';
import {imgUrls} from "../scripts/Gallery/homepage";
import Bio from './Bio';

export default function Homepage() {
    return (
        <div>
            <Bio />
                <div className="Homepage" style={{color: "#e0e0e0", fontWeight: 200}}>
                    <Gallery gridData={imgUrls}/>
                </div>
        </div>
        
        
    );
}
