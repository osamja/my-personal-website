import React from 'react';
import styled from 'styled-components';
import Bio from './Bio';
import { getHomePageSource } from '../scripts/Gallery/homepage';
import ExperienceList from '../components/ExperienceList';

export default function Homepage() {
    const nostrPath = getHomePageSource("nostr-link.png");
    const githubPath = getHomePageSource("github-mark/github-mark-white-link.png");

    const StyledSocialIcon = styled.img`
        width: 2.25rem;
        height: 2.25rem;
        border-radius: 50%;
        transition: opacity 0.18s ease, transform 0.18s ease;

        &:hover {
            opacity: 0.75;
            transform: translateY(-1px);
        }
    `;

    const StyledContainer = styled.div`
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 1.25rem;
        margin-bottom: 2rem;
    `;

    const StyledSectionTitle = styled.h3`
        font-family: var(--ks-font-display);
        font-weight: 300;
        font-size: 1.5rem;
        color: var(--ks-champagne);
        margin: 2.5rem 0 1rem;
    `;

    return (
        <div>
            <StyledContainer>
                <a href="https://primal.net/p/nprofile1qqsd8yt0g2l2usskjn8q8yuvxt60w8uk0vzsdzcp6ufmgcgkt0wkg3sle0dc6">
                    <StyledSocialIcon src={nostrPath} alt='Nostr profile' />
                </a>
                <a href='https://github.com/osamja'>
                    <StyledSocialIcon src={githubPath} alt='GitHub profile' />
                </a>
            </StyledContainer>

            <Bio />

            <StyledSectionTitle>Some cool experiences</StyledSectionTitle>
            <ExperienceList />
        </div>
    );
}
