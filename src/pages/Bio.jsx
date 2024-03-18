import React from 'react';
import styled from 'styled-components';
import { getHomePageSource } from '../scripts/Gallery/homepage';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';

import 'react-vertical-timeline-component/style.min.css';

// https://reactjsexample.com/a-vertical-timeline-component-for-react/

export default function Bio() {
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
        color: white;
        text-decoration: underline;
    `;

    const StyledTimelinePicture = styled.img`
        float: right;
        border-radius: 50%;
        width:25%;/*To occupy image portion of the container and also fit inside the container*/
        max-width:100%/*To fit inside the container alone with natural size of the image ,Use either of these width or max-width based on your need*/
        height:auto;
    `;

    const StyledTimelineAdobePicture = styled.img`
        float: right;
        width:25%;/*To occupy image portion of the container and also fit inside the container*/
        max-width:100%/*To fit inside the container alone with natural size of the image ,Use either of these width or max-width based on your need*/
        height:auto;
    `;

    return (
        <div className="Bio" style={{ color: '#e0e0e0', textAlign: 'left', margin: '5%' }}>
            <div>
                <div className="Homepage" style={{ color: "#e0e0e0", fontWeight: 200 }}>
                    <VerticalTimeline>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--travel"
                            date="2023 - present"
                            contentStyle={{ background: 'rgb(221, 196, 248)', color: 'white' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'rgb(221, 196, 248)', color: 'white' }}
                            icon={<TravelIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Padawan</h3>
                            <StyledTimelinePicture src={getHomePageSource("yin-yang.png")} alt="here is an AI generated portrait of me" />
                            <p>
                                Studying AI by building an automatic music transcription guitar app.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--travel"
                            date="2022 - present"
                            contentStyle={{ background: 'rgb(202, 156, 158)', color: 'white' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            iconStyle={{ background: 'rgb(202, 156, 158)', color: 'white' }}
                            icon={<TravelIcon />}
                        >
                            <h3 className="vertical-timeline-element-title">Nomad</h3>
                            <StyledTimelinePicture src={getHomePageSource("anime-backpack-me.JPG")} alt="here is an AI generated portrait of me" />
                            <h4 className="vertical-timeline-element-subtitle">Europe, Japan</h4>
                            <p>
                                I backpacked <StyledLink href="https://youtu.be/mcHtMAysfao">Europe</StyledLink> for and self-studied AI in <StyledLink href="https://sammyjaved.com/japan">Japan</StyledLink>.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--work"
                            contentStyle={{ background: 'rgb(218, 56, 50)', color: 'white' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2018 - 2022"
                            iconStyle={{ background: 'rgb(218, 56, 50)', color: 'white' }}
                            icon={<WorkIcon />}
                        >
                            <h3 className="vertical-timeline-element-title" >Full-Stack Web Developer at Adobe</h3>
                            <StyledTimelineAdobePicture src={getHomePageSource("adobe.png")} alt="here is an AI generated portrait of me" />
                            <h4 className="vertical-timeline-element-subtitle">San Francisco, CA</h4>
                            <p>
                                Developed microservices, frontend components, and the monolith for the Adobe Stock website.
                            </p>
                        </VerticalTimelineElement>
                        <VerticalTimelineElement
                            className="vertical-timeline-element--school"
                            contentStyle={{ background: 'rgb(25, 65, 113)', color: 'rgb(237, 184, 72)' }}
                            contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
                            date="2015 - 2018"
                            iconStyle={{ background: 'rgb(25, 65, 113)', color: 'rgb(237, 184, 72)' }}
                            icon={<SchoolIcon />}
                        >
                            <h3 className="vertical-timeline-element-title" style={{ display: 'inline' }}>B.A. in Computer Science</h3>
                            <StyledTimelinePicture src={getHomePageSource("berkeley-seal.png")} alt="UC Berkeley" />
                            <h4 className="vertical-timeline-element-subtitle">Berkeley, CA</h4>
                            <p>
                                Took as many CS courses as I could handle + a Harry Potter class.
                            </p>
                        </VerticalTimelineElement>
                    </VerticalTimeline>

                    {/* <ul>
                        <StyledLi>Currently, I am studying ML abroad (in Kyoto, Japan as of March 2023) since I never got the chance to do it in school.</StyledLi>
                        <StyledLi>I was a full-stack web developer at Adobe for 4 years where I worked on the Adobe Stock website (Feb 2018 - April 2022)</StyledLi>
                        <StyledLi>I did my undergraduate studies in computer science from UC Berkeley (May 2015 - Dec 2017)</StyledLi>
                    </ul> */}
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
