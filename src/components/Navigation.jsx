import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HamburgerButton = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1001;
  background: var(--ks-raised);
  border: 1px solid var(--ks-rule);
  border-radius: 4px;
  color: var(--ks-champagne);
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  padding: 8px;
  transition: border-color 0.18s ease, background 0.18s ease;

  &:hover {
    border-color: var(--ks-rule-strong);
    background: var(--ks-graphite);
  }

  @media (min-width: 48em) {
    display: none;
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 20px;
  height: 2px;
  background: var(--ks-champagne);
  border-radius: 1px;
  transition: transform 0.3s, opacity 0.3s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: oklch(4% 0.004 95 / 0.6);
  z-index: 999;
  opacity: ${({ $isOpen }) => ($isOpen ? 1 : 0)};
  pointer-events: ${({ $isOpen }) => ($isOpen ? 'auto' : 'none')};
  transition: opacity 0.3s;
`;

const Sidebar = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  width: 280px;
  max-width: 85vw;
  background: var(--ks-lacquer-deep);
  border-right: 1px solid var(--ks-rule);
  z-index: 1000;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
  overflow-y: auto;
  padding: 20px 0;
`;

const NavSection = styled.div`
  margin-bottom: 8px;
`;

const NavSectionTitle = styled.div`
  padding: 12px 24px 6px;
  font-family: var(--ks-font-mono);
  font-size: 0.6875rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 0.18em;
  color: var(--ks-faint);
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 10px 24px;
  color: var(--ks-muted);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  transition: background 0.15s, color 0.15s, border-color 0.15s;
  border-left: 1px solid transparent;

  &:hover {
    background: var(--ks-graphite);
    color: var(--ks-champagne);
  }

  &.active {
    background: var(--ks-graphite);
    color: var(--ks-kinpaku);
    border-left-color: var(--ks-kinpaku);
  }
`;

const SidebarWordmark = styled.span`
  font-family: var(--ks-font-display);
  font-size: 1.1rem;
  font-weight: 400;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--ks-champagne);
`;

const navSections = [
  {
    title: 'Main',
    links: [
      { to: '/', label: 'Home' },
      { to: '/journal', label: 'Journal' },
    ],
  },
  {
    title: 'Content',
    links: [
      { to: '/books', label: 'Books' },
      { to: '/movies', label: 'Movies' },
      { to: '/shows', label: 'Live Events' },
      { to: '/guitar', label: 'Guitar' },
      { to: '/travel', label: 'Travel' },
      { to: '/photography', label: 'Photography' },
    ],
  },
  {
    title: 'Work',
    links: [
      { to: '/projects', label: 'Projects' },
      { to: '/academic', label: 'Academic' },
    ],
  },
];

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const close = useCallback(() => setIsOpen(false), []);

  useEffect(() => {
    close();
  }, [location, close]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <HamburgerButton onClick={() => setIsOpen(!isOpen)} aria-label="Menu">
        <HamburgerLine />
        <HamburgerLine />
        <HamburgerLine />
      </HamburgerButton>

      <Overlay $isOpen={isOpen} onClick={close} />

      <Sidebar $isOpen={isOpen}>
        <div style={{ padding: '16px 24px 24px', borderBottom: '1px solid var(--ks-rule)', marginBottom: '8px' }}>
          <SidebarWordmark>Sammy Javed</SidebarWordmark>
        </div>
        {navSections.map((section) => (
          <NavSection key={section.title}>
            <NavSectionTitle>{section.title}</NavSectionTitle>
            {section.links.map((link) => (
              <StyledNavLink key={link.to} to={link.to} exact={link.to === '/'} onClick={close}>
                {link.label}
              </StyledNavLink>
            ))}
          </NavSection>
        ))}
      </Sidebar>
    </>
  );
}
