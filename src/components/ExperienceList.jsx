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
      I <StyledLink href="https://www.youtube.com/watch?v=wDBnOPnfvyM">backpacked Europe</StyledLink> for 4 months.  Traveled to 11 different countries and countless cities.
    </StyledListItem>
    <StyledListItem>
      Volunteered with San Francisco's Department of Homelessness to build them a new <StyledLink href="https://hsh.sfgov.org/">website</StyledLink>.
    </StyledListItem>
    <StyledListItem>
      Developed a face morphing <StyledLink href="https://apps.apple.com/us/app/mymorph/id1554421298">iOS app</StyledLink> from a class project.
    </StyledListItem>
    <StyledListItem>
      Created an animated short <StyledLink href="https://www.youtube.com/watch?v=silvjiqSnaQ">film</StyledLink> about saving trees with my team.
    </StyledListItem>
  </StyledList>
);

export default ExperienceList;
