import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export default function GridItem(props) {
  const { gridItem } = props;
  const image_content = gridItem;

  const StyledGalleryImg = styled.img`
    width: 100%;
  `;

  let gridItemz;

  if (image_content.redirect === true) {
    gridItemz = (
      <a href={image_content.url} target="_blank" rel="noopener noreferrer">
        <StyledGalleryImg src={image_content.src} alt={image_content.text.toString()} />
        <h2 className="grid-item-label">{image_content.text}</h2>
      </a>
    );
  } else if (image_content.url && image_content.url !== '#') {
    gridItemz = (
      <NavLink to={image_content.url}>
        <StyledGalleryImg src={image_content.src} alt={image_content.text.toString()} />
        <h2 className="grid-item-label">{image_content.text}</h2>
      </NavLink>
    );
  } else {
    gridItemz = (
      <div>
        <StyledGalleryImg src={image_content.src} alt={image_content.text.toString()} />
        <h2 className="grid-item-label">{image_content.text}</h2>
      </div>
    );
  }

  return (
    <div className="grid-item" key={image_content.src + image_content.text}>
      {gridItemz}
    </div>
  );
}
