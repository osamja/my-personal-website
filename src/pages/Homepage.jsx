import React from 'react';
import styled, { keyframes } from 'styled-components';
import Bio from './Bio';
import {getHomePageSource} from '../scripts/Gallery/homepage';

export default function Homepage() {

    const StyledLink = styled.a`
        color: pink;
    `;

    const nostrPath = getHomePageSource("nostr-link.png");
    const githubPath = getHomePageSource("github-mark/github-mark-white-link.png");

    const slideIn = keyframes`
        0% {
            transform: translateX(-100%);
            opacity: 0;
        }
        100% {
            transform: translateX(0);
            opacity: 1;
        }
    `;

    const StyledNostrLink = styled.img`
        // Center the image
        margin-left: auto;
        margin-right: auto;
        border-radius: 50%;
        // Set the border
        border: 1px solid #fff;
        // Set the box-shadow
        box-shadow: 0 0 0 1px #fff;
        // Set the transition
        transition: all 0.3s ease-in-out;
        // Set the hover state
        &:hover {
            // Set the border
            border: 1px solid #fff;
            // Set the box-shadow
            box-shadow: 0 0 0 1px #fff;
            // Set the transform
            transform: scale(1.1);
        }

    `;

    const StyledSocialLinks = styled.a`
        display: inline-flex;
        animation: ${slideIn} 0.5s ease-out forwards;
    `;

    const StyledContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        flex-wrap: nowrap;
        gap: 1rem;
    `;

    const StyledPageContent = styled.div`
        padding-bottom: 1rem; // Add some default padding-bottom for all devices

        @media (max-width: 768px) {
            padding-bottom: 3rem; // Add more padding-bottom for smaller devices
        }
    `;

    return (
        <StyledPageContent>
            <StyledContainer>
                <StyledSocialLinks href="https://snort.social/p/npub16wgk7s474eppd9xwqwfccvh57u0ev7c9q69sr4cnk3s3vk7av3rqf98had">
                    <StyledNostrLink src={nostrPath} alt='Image' />
                </StyledSocialLinks>
                
                <StyledSocialLinks href='https://github.com/osamja'>
                    <StyledNostrLink src={githubPath} alt='Image' />
                </StyledSocialLinks>    
            </StyledContainer>

            <Bio />
            <ul style={{color: 'white'}}>
                <li>In 2022, I backpacked Europe for 4 months.  Here's a <StyledLink href="https://www.youtube.com/watch?v=wDBnOPnfvyM">video</StyledLink> I made of my trip.</li>
                <li>In 2020, I volunteered with San Francisco's Department of Homelessness and Supportive Housing to help build them a new <StyledLink href="https://hsh.sfgov.org/">website</StyledLink>.</li>
                <li>In 2019, I developed a face morpher app I had worked on in school into an <StyledLink href="https://apps.apple.com/us/app/mymorph/id1554421298">iOS app</StyledLink>.  You can try it on the web <StyledLink href="https://imagemorpher-mobile.vercel.app/">here</StyledLink>.</li>
                <li>In 2017, I helped produce a short animated film from my UCBUGG class.  Check it out <StyledLink href="https://www.youtube.com/watch?v=silvjiqSnaQ">here</StyledLink>.</li>
            </ul>
        </StyledPageContent>  
    );
}
