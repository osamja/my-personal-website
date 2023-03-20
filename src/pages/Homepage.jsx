import React from 'react';
import styled from 'styled-components';
import Bio from './Bio';

export default function Homepage() {

    const StyledLink = styled.a`
        color: pink;
    `;

    return (
        <div>
            <Bio />
            <ul style={{color: 'white'}}>
                <li>In 2022, I backpacked Europe for 4 months.  Here's a <StyledLink href="https://www.youtube.com/watch?v=wDBnOPnfvyM">video</StyledLink> I made of my trip.</li>
                <li>In 2020, I volunteered with San Francisco's Department of Homelessness and Supportive Housing to help build them a new <StyledLink href="https://hsh.sfgov.org/">website</StyledLink>.</li>
                <li>In 2019, I developed a face morpher app I had worked on in school into an <StyledLink href="https://apps.apple.com/us/app/mymorph/id1554421298">iOS app</StyledLink>.  You can try it on the web <StyledLink href="https://imagemorpher-mobile.vercel.app/">here</StyledLink>.</li>
                <li>In 2017, I helped produce a short animated film from my UCBUGG class.  Check it out <StyledLink href="https://www.youtube.com/watch?v=silvjiqSnaQ">here</StyledLink>.</li>
            </ul>
        </div>  
    );
}
