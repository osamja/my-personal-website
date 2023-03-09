import React from 'react';
import Gallery from '../components/grid/Gallery';
import {imgUrls, getHomePageSource} from '../scripts/Gallery/homepage';
import styled from 'styled-components';

export default function Homepage() {
    const StyledHeader = styled.h2`
        font-weight: 250;
    `;

    const StyledLi = styled.li`
        font-weight: 100;
    `;

    const StyledImage = styled.img`
        max-width: 25%;
    `;


    return (
        <div>
            <div className="Homepage" style={{color: "#e0e0e0", fontWeight: 200}}>
                {/* <Gallery gridData={imgUrls} /> */}
                <StyledHeader>Adab</StyledHeader>
                <ul>
                    <StyledLi>I am currently studying ML abroad (in Kyoto, Japan as of March 2023) since I never got the chance to do it in school.</StyledLi>
                    <StyledLi>I was a full-stack web developer at Adobe for 4 years where I worked on the Adobe Stock website (Feb 2018 - April 2022)</StyledLi>
                    <StyledLi>I did my undergraduate studies in computer science from UC Berkeley (May 2015 - Dec 2017)</StyledLi>
                </ul>
                <StyledImage src={getHomePageSource("anime-backpack-me.JPG")} alt="here is an AI generated portrait of me" />      

                <div className="Homepage" style={{color: "#e0e0e0", fontWeight: 200}}>
                    <Gallery gridData={imgUrls} />
                </div>  
            </div>
        </div>
    );
}
