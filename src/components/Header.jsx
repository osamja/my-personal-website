import React from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
  const history = useHistory();

  const StyledHeader = styled.h1`
    display: inline;
    color: white;
    font-family: 'Roboto', sans-serif;
    font-size: 2.5rem;
    font-weight: 300;
    letter-spacing: 1px;
    cursor: pointer;
    background-image: linear-gradient(45deg, #8e44ad, #3498db);
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    -webkit-text-stroke: 1px rgba(0, 0, 0, 0.5);

    &:hover {
      text-decoration: underline;
    }
  `;

  const HeaderContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const handleHeaderClick = () => {
    history.push('/');
  };

  return (
    <HeaderContainer>
      <StyledHeader onClick={handleHeaderClick}>Sammy Javed</StyledHeader>
    </HeaderContainer>
  );
}
