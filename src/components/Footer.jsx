import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  margin-top: 3rem;
  padding: 2rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.08);
  text-align: center;
`;

const FooterLinks = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
  margin-bottom: 1rem;
`;

const FooterLink = styled(NavLink)`
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  font-size: 0.85rem;
  font-weight: 300;
  transition: color 0.2s;

  &:hover {
    color: rgba(255, 255, 255, 0.8);
  }
`;

const Copyright = styled.p`
  color: rgba(255, 255, 255, 0.3);
  font-size: 0.75rem;
  margin: 0;
`;

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <FooterWrapper>
      <FooterLinks>
        <FooterLink to="/">Home</FooterLink>
        <FooterLink to="/projects">Projects</FooterLink>
        <FooterLink to="/books">Books</FooterLink>
        <FooterLink to="/travel">Travel</FooterLink>
        <FooterLink to="/journal">Journal</FooterLink>
      </FooterLinks>
      <Copyright>&copy; {year} Sammy Javed</Copyright>
    </FooterWrapper>
  );
}
