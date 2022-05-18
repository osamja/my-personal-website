import React, { Component } from 'react';
import {
    getBaseUrl,
    getBasePath,
} from '../scripts/Routes/images.js';

export default function Bio() {

    // https://reactjsexample.com/a-vertical-timeline-component-for-react/

    const mePath = getBaseUrl() + '/' + getBasePath() + '/home/me.jpg';

    return (
        <div className="Bio" style={{color: '#e0e0e0', textAlign: 'left', margin: '5%'}}>
            <h1>
                Bio
            </h1>
            <ul>
                <li><b>I am</b> currently a digital nomad.  I intend to backpack Europe this Summer, starting with London.  Ending who knows where and when (April 2022 - Present)</li>  
                <ul>
                    <li>I'm currently studying ML and am planning to build some silly apps this year.</li>
                </ul>
                <li>Before that, I was a full-stack web developer at Adobe for 4 years where I worked on the <a href='https://stock.adobe.com' style={{'color': 'pink'}}>Adobe Stock</a> website (Feb 2018 - April 2022)</li>
                <li>Before that, I did my undergraduate studies in computer science from <a href='https://cs.berkeley.edu/' style={{'color': 'pink'}}>UC Berkeley</a></li>
            </ul>
            
            <h2>Interests</h2>
            <ul>
                <li>Writing software</li>
                <li>Staying active and limiting junk food</li>
                <li>Video editing</li>
                <li>Playing guitar</li>
                <li>Playing basketball</li>
            </ul>

            <h2>Picture</h2>
            <p>Here is me</p>
            <img src={mePath} alt="Me" width='50%' style={{marginBottom: '5%'}}></img>
        </div>
    );
    
}
