import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const PlaceholderDiv = styled.div`
  width: 100%;
  padding-bottom: 66.67%;
  background: linear-gradient(135deg, var(--ks-graphite-2) 0%, var(--ks-lacquer-deep) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background:
      linear-gradient(45deg, transparent 49.5%, var(--ks-rule) 49.5%, var(--ks-rule) 50.5%, transparent 50.5%),
      linear-gradient(-45deg, transparent 49.5%, var(--ks-rule) 49.5%, var(--ks-rule) 50.5%, transparent 50.5%);
  }
`;

const PlaceholderText = styled.span`
  color: var(--ks-muted);
  font-size: 0.85rem;
  font-weight: 300;
  position: relative;
  z-index: 1;
  padding: 8px 16px;
`;

const isPlaceholder = (src) => {
  return !src || src.startsWith('data:image/svg+xml') || src.includes('/general/colors/black');
};

export default function GridItem(props) {
  const { gridItem } = props;
  const image_content = gridItem;

  const StyledGalleryImg = styled.img`
    width: 100%;
  `;

  const renderContent = () => {
    if (isPlaceholder(image_content.src)) {
      return (
        <PlaceholderDiv>
          <PlaceholderText>{image_content.text}</PlaceholderText>
        </PlaceholderDiv>
      );
    }
    return (
      <>
        <StyledGalleryImg src={image_content.src} alt={image_content.text.toString()} />
        <h2 className="grid-item-label">{image_content.text}</h2>
      </>
    );
  };

  let gridItemz;

  if (image_content.redirect === true) {
    gridItemz = (
      <a href={image_content.url} target="_blank" rel="noopener noreferrer">
        {renderContent()}
      </a>
    );
  } else if (image_content.url && image_content.url !== '#') {
    gridItemz = (
      <NavLink to={image_content.url}>
        {renderContent()}
      </NavLink>
    );
  } else {
    gridItemz = (
      <div>
        {renderContent()}
      </div>
    );
  }

  return (
    <div className="grid-item" key={image_content.src + image_content.text}>
      {gridItemz}
    </div>
  );
}
