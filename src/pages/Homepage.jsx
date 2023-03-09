import React from 'react';
import Gallery from '../components/grid/Gallery';
import {imgUrls, getHomePageSource} from '../scripts/Gallery/homepage';
import styled from 'styled-components';

export default function Homepage() {
    const StyledHeader = styled.h2`
        font-weight: 250;
    `;

    const StyledParagraph = styled.p`
        font-weight: 100;
    `;

    const StyledImage = styled.img`
        max-width: 25%;
    `;


    return (
        <div>
            <div className="Homepage" style={{color: "#e0e0e0", fontWeight: 200, textAlign: 'center'}}>
                {/* <Gallery gridData={imgUrls} /> */}
                <StyledHeader>What's Up!</StyledHeader>
                <StyledParagraph>
                    I'm Sammy, a software developer from the Bay Area.  I attended Evergreen Valley College and UC Berkeley.  I studied computer science.  I enjoy coding, playing guitar, PC gaming which these days is mostly Rocket League, watching movies, playing basketball, drinking coffee, video editing, watching sports (go Warriors and 49ers) and hiking.  I'm currently self-employed looking to pursue some creative endeavors.  Before that, I worked at Adobe for four years.  Io vivo a San Jose, California, USA.
                </StyledParagraph>
                <StyledImage src={getHomePageSource("IMG_2464.JPG")} alt="here is an AI generated portrait of me" />      

                <div className="Homepage" style={{color: "#e0e0e0", fontWeight: 200}}>
                    <Gallery gridData={imgUrls} />
                </div>  
            </div>
        </div>
    );
}
