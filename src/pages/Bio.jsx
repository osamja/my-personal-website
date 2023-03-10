import React from 'react';
import styled from 'styled-components';
import {getHomePageSource} from '../scripts/Gallery/homepage';

export default function Bio() {

    // https://reactjsexample.com/a-vertical-timeline-component-for-react/
    const StyledHeader = styled.h2`
        font-weight: 250;
        display: inline;
    `;

    const StyledLi = styled.li`
        font-weight: 100;
    `;

    const StyledImage = styled.img`
        float: right;
        border-radius: 50%;
    `;

    return (
        <div className="Bio" style={{color: '#e0e0e0', textAlign: 'left', margin: '5%'}}>
            <div>
                <div className="Homepage" style={{color: "#e0e0e0", fontWeight: 200}}>
                    <StyledImage src={getHomePageSource("anime-backpack-me.JPG")} alt="here is an AI generated portrait of me" />      
                    <StyledImage src={getHomePageSource("berkeley-seal.png")} alt="here is an AI generated portrait of me" />      
                    <StyledHeader>Adab! (Hi) I'm Sammy</StyledHeader>
                    
                    <ul>
                        <StyledLi>Currently, I am studying ML abroad (in Kyoto, Japan as of March 2023) since I never got the chance to do it in school.</StyledLi>
                        <StyledLi>I was a full-stack web developer at Adobe for 4 years where I worked on the Adobe Stock website (Feb 2018 - April 2022)</StyledLi>
                        <StyledLi>I did my undergraduate studies in computer science from UC Berkeley (May 2015 - Dec 2017)</StyledLi>
                    </ul>
                </div>
            </div>

            {/* <h2>Pictures</h2> */}
            {/* TODO: Add a click here button to see me before/after haircut button.  Avoids loading unnecessary images + fun interaction for user */}
            {/* <p>Here is me after haircut</p>
            <img src={mePath} alt="Me" width='50%' style={{marginBottom: '5%'}}></img>

            <p>Here is me before haircut</p>
            <img src={meBefore} alt="Me" width='30%' style={{marginBottom: '5%'}}></img> */}
        </div>
    );
}
