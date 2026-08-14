import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 50vh;
  padding: 2rem;
  text-align: center;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: 100;
  color: var(--ks-faint);
  margin: 0 0 0.5rem;
  line-height: 1;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: var(--ks-muted);
  margin: 0 0 2rem;
  font-weight: 300;
`;

const LinkGrid = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.75rem;
  max-width: 400px;
`;

const LinkCard = styled(NavLink)`
  padding: 0.6rem 1.2rem;
  background: var(--ks-raised);
  border: 1px solid var(--ks-rule);
  border-radius: 4px;
  color: var(--ks-text);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 300;
  transition: border-color 0.2s, color 0.2s;

  &:hover {
    border-color: var(--ks-rule-strong);
    color: var(--ks-kinpaku);
  }
`;

const links = [
  { to: '/', label: 'Home' },
  { to: '/projects', label: 'Projects' },
  { to: '/books', label: 'Books' },
  { to: '/movies', label: 'Movies' },
  { to: '/travel', label: 'Travel' },
  { to: '/guitar', label: 'Guitar' },
  { to: '/journal', label: 'Journal' },
];

export default function NotFound() {
  return (
    <Wrapper>
      <ErrorCode>404</ErrorCode>
      <Message>This page doesn't exist.</Message>
      <LinkGrid>
        {links.map((link) => (
          <LinkCard key={link.to} to={link.to} exact={link.to === '/'}>
            {link.label}
          </LinkCard>
        ))}
      </LinkGrid>
    </Wrapper>
  );
}
