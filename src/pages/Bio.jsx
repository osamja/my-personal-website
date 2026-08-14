import React from 'react';
import styled from 'styled-components';
import { getHomePageSource } from '../scripts/Gallery/homepage';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

const WorkIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="feather feather-briefcase"
    >
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect>
        <path d="M8 21V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v14"></path>
    </svg>
);

const SchoolIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M21 17v-6.9L12 15L1 9l11-6l11 6v8h-2Zm-9 4l-7-3.8v-5l7 3.8l7-3.8v5L12 21Z" /></svg>
);

const TravelIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48"><g fill="currentColor"><path d="M29.8 17.396a159.482 159.482 0 0 1-11.583 0a6 6 0 1 0 11.567 0h.016ZM25 30.341l5 1.488V40h-5v-9.659ZM23 40h-5v-8.17l5-1.489V40Z" /><path fillRule="evenodd" d="M48 0H0v48h48V0ZM24 6c-4.5 0-7 1.2-7 1.2V12l-3.529 3.529c-.593.593-.236 1.588.6 1.648c.59.042 1.299.087 2.12.13l-.011-.001a8 8 0 1 0 15.64 0a112.94 112.94 0 0 0 2.109-.13c.836-.06 1.193-1.054.6-1.647L30.999 12V7.2S28.5 6 24 6Zm.288 22.042l6.542 1.947l5.607-3.816A1 1 0 0 1 38 27v5h-2v-3.11l-4 2.722V40c0 .768.289 1.47.764 2H15.236c.475-.53.764-1.232.764-2v-8.465l-4-2.666V32h-2v-5a1 1 0 0 1 1.555-.832l5.696 3.797l6.46-1.923A.979.979 0 0 1 24 28a.998.998 0 0 1 .288.042ZM37 34a3 3 0 0 0-3 3v2a3 3 0 0 0 3 3h5v-5a3 3 0 0 0-3-3h-2ZM9 34a3 3 0 0 0-3 3v5h5a3 3 0 0 0 3-3v-2a3 3 0 0 0-3-3H9Z" clipRule="evenodd" /></g></svg>
);

const StyledLink = styled.a`
    color: var(--ks-kinpaku);
    text-decoration: none;

    &:hover {
        color: var(--ks-kinpaku-pale);
        text-decoration: underline;
    }
`;

const StyledTimelinePicture = styled.img`
    float: right;
    width: 20%;
    max-width: 100%;
    height: auto;
    margin-left: 1rem;
`;

const StyledTimelineEVCPicture = styled.img`
    float: right;
    width: 40%;
    max-width: 100%;
    height: auto;
    margin-left: 1rem;
`;

export default function Bio() {
    const workContentStyle = {
        background: 'var(--ks-raised)',
        color: 'var(--ks-text)',
        border: '1px solid var(--ks-rule-strong)',
        boxShadow: 'none',
        borderRadius: '4px',
    };

    const secondaryContentStyle = {
        background: 'var(--ks-raised)',
        color: 'var(--ks-text)',
        border: '1px solid var(--ks-rule)',
        boxShadow: 'none',
        borderRadius: '4px',
    };

    const workIconStyle = { background: 'var(--ks-kinpaku)', color: 'var(--ks-dark-ink)', boxShadow: 'none' };
    const secondaryIconStyle = { background: 'var(--ks-patina-deep)', color: 'var(--ks-champagne)', boxShadow: 'none' };

    return (
        <div className="Bio" style={{ color: 'var(--ks-text)', textAlign: 'left' }}>
            <div className="Homepage" style={{ fontWeight: 300 }}>
                <VerticalTimeline>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2024 - present"
                        contentStyle={workContentStyle}
                        iconStyle={workIconStyle}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Member of Technical Staff at <StyledLink href="https://vast.ai">Vast.ai</StyledLink></h3>
                        <StyledTimelinePicture src={getHomePageSource("vast.svg")} alt="Vast.ai Logo" />
                        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
                        <p>
                            Working on agents, cloud, and Things.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--travel"
                        date="2023 - 2024"
                        contentStyle={secondaryContentStyle}
                        iconStyle={secondaryIconStyle}
                        icon={<TravelIcon />}
                    >
                        <h3 className="vertical-timeline-element-title"><StyledLink href="https://pyaar.ai">Pyaar.ai</StyledLink></h3>
                        <StyledTimelinePicture src={getHomePageSource("yin-yang.png")} alt="Pyaar.ai logo" />
                        <h4 className="vertical-timeline-element-subtitle">CA, Kyoto, Milan</h4>
                        <p>
                            Automatic music transcription app built on Magenta MT3. This converts audio to MIDI and sheet music.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--work"
                        date="2018 - 2022"
                        contentStyle={workContentStyle}
                        iconStyle={workIconStyle}
                        icon={<WorkIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">Full-Stack Web Developer at Adobe</h3>
                        <StyledTimelinePicture src={getHomePageSource("adobe.png")} alt="Adobe logo" />
                        <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                        <p>
                            Developed microservices, frontend components, and the monolith for the Adobe <StyledLink href="https://stock.adobe.com">Stock</StyledLink> website.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--school"
                        date="2015 - 2018"
                        contentStyle={secondaryContentStyle}
                        iconStyle={secondaryIconStyle}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">B.A. in Computer Science</h3>
                        <StyledTimelinePicture src={getHomePageSource("berkeley-seal.png")} alt="UC Berkeley" />
                        <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
                        <p>
                            Took as many <StyledLink href="https://eecs.berkeley.edu/cs/">CS</StyledLink> courses as I could handle + a Harry Potter class.
                        </p>
                    </VerticalTimelineElement>
                    <VerticalTimelineElement
                        className="vertical-timeline-element--school"
                        date="2012 - 2015"
                        contentStyle={secondaryContentStyle}
                        iconStyle={secondaryIconStyle}
                        icon={<SchoolIcon />}
                    >
                        <h3 className="vertical-timeline-element-title">A.S. in Mathematics</h3>
                        <StyledTimelineEVCPicture src={getHomePageSource("evc-logo.png")} alt="Evergreen Valley College Logo" />
                        <h4 className="vertical-timeline-element-subtitle">Evergreen Valley College</h4>
                        <h4 className="vertical-timeline-element-subtitle">San Jose, CA</h4>
                        <p>
                            Computer Science coursework before transferring to UC Berkeley.
                        </p>
                    </VerticalTimelineElement>
                </VerticalTimeline>
            </div>
        </div>
    );
}
