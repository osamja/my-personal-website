import React from 'react'
import DropzoneContainer from './DropzoneContainer';
import styled from 'styled-components';

export default function Upload() {
  const StyledContainer = styled.div`
    display: grid;
    grid-gap: 100px;
  `;

  return (
    <StyledContainer>
      <DropzoneContainer 
        dropzoneText="left"
        dropzoneColor="#5d5b6a"
        gridColumn="1"
        borderRadisu="25px"
      />
      <DropzoneContainer 
        dropzoneText="right"
        dropzoneColor="#5d5b6a"
        gridColumn="2"
      />
    </StyledContainer>
  )
}
