import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function Header() {
    const StyledHeader = styled.h1`
        color: white;
        font-weight: 100;

        &: hover {
            font-weight: 350;
        }
    `;

    

    return (
        <div style={{textAlign: 'center', textShadow: `1px 1px 2px red, 0 0 1em blue, 0 0 0.2em blue`}}>
            <NavLink to="/" style={{textDecoration: 'none'}}>
                <StyledHeader>Sammy Javed</StyledHeader>
            </NavLink>
            {/* Social Media Icon Links */}
            {/* <a href="https://twitter.com/osamja24" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-twitter" />
            </a>
            <a href="https://www.linkedin.com/in/sammy-javed-991a4a72/" target="_blank" rel="noopener noreferrer">
                <i className="fa fa-linkedin" />
            </a> */}
        </div>
    );
}
