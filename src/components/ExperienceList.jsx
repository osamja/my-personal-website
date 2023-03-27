import React from 'react';
import styled from 'styled-components';

const StyledList = styled.ul`
  list-style-type: none;
  color: white;
  padding: 0;
`;

const StyledListItem = styled.li`
        position: relative;
        padding-left: 1.5rem;
        margin-bottom: 1rem;
        transition: all 0.3s ease;

        &:before {
        content: '';
        position: absolute;
        left: 0;
        top: 50%;
        width: 5px;
        height: 5px;
        background-color: #8e44ad;
        border-radius: 50%;
        transform: translateY(-50%);
        transition: all 0.3s ease;
        }

        &:hover {
            &:before {
                width: 10px;
                height: 10px;
                background-color: #3498db;
            }
        }
    `;

const StyledLink = styled.a`
  color: #f06292;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const ExperienceList = () => (
  <StyledList>
    <StyledListItem>
      In 2022, I backpacked Europe for 4 months. Here's a{' '}
      <StyledLink href="https://www.youtube.com/watch?v=wDBnOPnfvyM">video</StyledLink> I made of my trip.
    </StyledListItem>
    <StyledListItem>
      In 2020, I volunteered with San Francisco's Department of Homelessness and Supportive Housing to help build them a new{' '}
      <StyledLink href="https://hsh.sfgov.org/">website</StyledLink>.
    </StyledListItem>
    <StyledListItem>
      In 2019, I developed a face morpher app I had worked on in school into an{' '}
      <StyledLink href="https://apps.apple.com/us/app/mymorph/id1554421298">iOS app</StyledLink>. You can try it on the web{' '}
      <StyledLink href="https://imagemorpher-mobile.vercel.app/">here</StyledLink>.
    </StyledListItem>
    <StyledListItem>
      In 2017, I helped produce a short animated film from my UCBUGG class. Check it out{' '}
      <StyledLink href="https://www.youtube.com/watch?v=silvjiqSnaQ">here</StyledLink>.
    </StyledListItem>
  </StyledList>
);

export default ExperienceList;
