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
        dropzoneColor="lightblue"
        gridColumn="1"
      />
      <DropzoneContainer 
        dropzoneText="right"
        dropzoneColor="lightcoral"
        gridColumn="2"
      />
    </StyledContainer>
  )
}
