import React from 'react';
import { useHistory, NavLink } from 'react-router-dom';
import styled from 'styled-components';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  padding: 2.25rem 1.5rem 1.5rem;
  border-bottom: 1px solid var(--ks-rule);
`;

const Wordmark = styled.h1`
  margin: 0;
  font-family: var(--ks-font-display);
  font-size: 1.3rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ks-champagne);
  cursor: pointer;
  transition: color 0.18s ease;

  &:hover {
    color: var(--ks-kinpaku);
  }
`;

const Nav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.25rem 1.5rem;

  @media (max-width: 48em) {
    display: none;
  }
`;

const StyledNavLink = styled(NavLink)`
  font-family: var(--ks-font-body);
  font-size: 0.8125rem;
  font-weight: 400;
  letter-spacing: 0.02em;
  color: var(--ks-muted);
  text-decoration: none;
  padding: 0.25rem 0;
  border-bottom: 1px solid transparent;
  transition: color 0.18s ease, border-color 0.18s ease;

  &:hover {
    color: var(--ks-kinpaku);
  }

  &.active {
    color: var(--ks-kinpaku);
    border-bottom-color: var(--ks-kinpaku);
  }
`;

export default function Header() {
  const history = useHistory();

  const handleHeaderClick = () => {
    history.push('/');
  };

  const links = [
    { to: '/', label: 'Home', exact: true },
    { to: '/bio', label: 'Bio' },
    { to: '/professional', label: 'Professional' },
    { to: '/projects', label: 'Projects' },
    { to: '/travel', label: 'Travel' },
    { to: '/photography', label: 'Photography' },
    { to: '/academic', label: 'Academic' },
    { to: '/books', label: 'Books' },
    { to: '/movies', label: 'Movies' },
    { to: '/shows', label: 'Shows' },
    { to: '/guitar', label: 'Guitar' },
    { to: '/journal', label: 'Journal' },
  ];

  return (
    <HeaderContainer>
      <Wordmark onClick={handleHeaderClick}>Sammy Javed</Wordmark>
      <Nav>
        {links.map((link) => (
          <StyledNavLink
            key={link.to}
            to={link.to}
            exact={link.exact}
          >
            {link.label}
          </StyledNavLink>
        ))}
      </Nav>
    </HeaderContainer>
  );
}
