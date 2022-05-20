import React from 'react';
import {NavLink} from 'react-router-dom';
import styled from 'styled-components';

export default function GridItem (props) {
    const {gridItem} = props;
    const image_content = gridItem;


    const imageText = {
        color: 'white',
        position: 'absolute',
        top: '12px',
        left: '12px',
        backgroundColor: 'black',
        opacity: '0.7',
        fontWeight: 300,
        fontStyle: 'normal'
    };

    const gridItemStyle = {
        'border': '2px solid #737373'
    };

    const onGridItemHover = (e) => {
        if (image_content.url && image_content.url !== '#') {
            e.currentTarget.style.border = '2px solid #d9d9d9'
        }
    }

    const onGridItemLeave = (e) => {
        e.currentTarget.style.border = '2px solid #737373'
    }

    const StyledGalleryImg = styled.img`
        width: 100%
    `;

    let gridItemz;

    if (image_content.redirect === true) {
        gridItemz = (
            <a href={image_content.url} target="_blank" rel="noopener noreferrer">
                <StyledGalleryImg src={image_content.src} alt={image_content.text.toString()}/>
                <h2 style={imageText}>{image_content.text}</h2>
            </a>
        )
    } else if (image_content.url && image_content.url !== '#') {
        gridItemz = (
        <NavLink to={image_content.url} >
            <StyledGalleryImg src={image_content.src} alt={image_content.text.toString()} />
            <h2 style={imageText}>{image_content.text}</h2>
        </NavLink>)
    } else {
        gridItemz = (
            <div>
                <StyledGalleryImg src={image_content.src} alt={image_content.text.toString()}/>
                <h2 style={imageText}>{image_content.text}</h2>
            </div>
        )
    }

    return (
        <div className="grid-item" key={image_content.url} onMouseOver={onGridItemHover} onMouseLeave={onGridItemLeave} style={gridItemStyle}>
            {gridItemz}
        </div>
    )
}
