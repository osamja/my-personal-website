import React, { useState, useEffect, useCallback } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const HamburgerButton = styled.button`
  position: fixed;
  top: 16px;
  left: 16px;
  z-index: 1001;
  background: rgba(46, 55, 80, 0.9);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 4px;
  color: white;
  width: 40px;
  height: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 5px;
  cursor: pointer;
  padding: 8px;
  transition: background 0.2s;

  &:hover {
    background: rgba(46, 55, 80, 1);
    border-color: rgba(255, 255, 255, 0.4);
  }
`;

const HamburgerLine = styled.span`
  display: block;
  width: 20px;
  height: 2px;
  background: white;
  border-radius: 1px;
  transition: transform 0.3s, opacity 0.3s;
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
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
  background: #252b3d;
  z-index: 1000;
  transform: translateX(${({ $isOpen }) => ($isOpen ? '0' : '-100%')});
  transition: transform 0.3s ease;
  overflow-y: auto;
  padding: 20px 0;
  box-shadow: ${({ $isOpen }) =>
    $isOpen ? '4px 0 24px rgba(0, 0, 0, 0.4)' : 'none'};
`;

const NavSection = styled.div`
  margin-bottom: 8px;
`;

const NavSectionTitle = styled.div`
  padding: 12px 24px 6px;
  font-size: 0.7rem;
  font-weight: 600;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.35);
`;

const StyledNavLink = styled(NavLink)`
  display: block;
  padding: 10px 24px;
  color: rgba(255, 255, 255, 0.8);
  text-decoration: none;
  font-size: 1rem;
  font-weight: 300;
  transition: background 0.15s, color 0.15s;
  border-left: 3px solid transparent;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    color: #fff;
  }

  &.active {
    background: rgba(255, 255, 255, 0.08);
    color: #fff;
    border-left-color: #8e44ad;
  }
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
      { to: '/professional', label: 'Professional' },
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
        <div style={{ padding: '16px 24px 24px', borderBottom: '1px solid rgba(255,255,255,0.08)', marginBottom: '8px' }}>
          <span style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 400, backgroundImage: 'linear-gradient(45deg, #8e44ad, #3498db)', WebkitBackgroundClip: 'text', backgroundClip: 'text', color: 'transparent', WebkitTextStroke: '0.5px rgba(0,0,0,0.3)' }}>
            Sammy Javed
          </span>
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
