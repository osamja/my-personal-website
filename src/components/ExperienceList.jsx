import React from 'react';
import styled from 'styled-components';
import { getImageSource } from '../scripts/Routes/images';

const StyledList = styled.ul`
  list-style-type: none;
  color: var(--ks-text);
  padding: 0;
  max-width: 70ch;
`;

const StyledListItem = styled.li`
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  line-height: 1.7;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0.65em;
    width: 5px;
    height: 5px;
    background-color: var(--ks-kinpaku);
    border-radius: 50%;
  }

  &:hover {
    &:before {
      background-color: var(--ks-patina);
    }
  }
`;

const StyledLink = styled.a`
  color: var(--ks-kinpaku);
  text-decoration: none;

  &:hover {
    color: var(--ks-kinpaku-pale);
    text-decoration: underline;
  }
`;

const NostrPdf = getImageSource('nostr.pdf', 'presentations');

const ExperienceList = () => (
  <StyledList>
    <StyledListItem>
      I backpacked <StyledLink href="https://youtu.be/mcHtMAysfao">UK, Europe</StyledLink> for 4 months, and slow traveled <StyledLink href="https://sammyjaved.com/japan">Japan</StyledLink>. In Kyoto, I gave a presentation about the <StyledLink href={NostrPdf}>Nostr</StyledLink> protocol to the Kyoto Web Developers group.
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
