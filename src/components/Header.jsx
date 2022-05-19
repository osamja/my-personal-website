import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
    const StyledHeader = styled.h1`
        color: white;
        font-weight: 300;
    `;

    return (
        <div style={{textAlign: 'center'}}>
            <NavLink to="/">
                <StyledHeader>Sammy Javed</StyledHeader>
            </NavLink>
            <a href="https://twitter.com/osamja24" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" />
            </a>
            <a href="https://www.linkedin.com/in/sammy-javed-991a4a72/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" />
            </a>
        </div>
    );
}
