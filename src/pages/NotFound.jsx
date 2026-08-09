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
  font-weight: 200;
  color: rgba(255, 255, 255, 0.15);
  margin: 0 0 0.5rem;
  line-height: 1;
`;

const Message = styled.p`
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.6);
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
  background: rgba(255, 255, 255, 0.06);
  border: 1px solid rgba(255, 255, 255, 0.1);
  border-radius: 6px;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  font-size: 0.9rem;
  font-weight: 300;
  transition: background 0.2s, border-color 0.2s, color 0.2s;

  &:hover {
    background: rgba(255, 255, 255, 0.1);
    border-color: rgba(255, 255, 255, 0.25);
    color: #fff;
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
