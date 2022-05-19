import React from 'react';
import styled from 'styled-components';
import GridItem from './GridItem';
// import '../style/Gallery.css';

export default function Gallery (props) {

    const { gridData } = props;

    const StyledGalleryItem = styled.div`
    `;


    const renderGridItem = (gridItem) => { 
        return (
            <GridItem gridItem={gridItem} />
        )
    }

    return (
        <div className="gallery-container">
            <StyledGalleryItem className="gallery-grid">
                {gridData.map((gridItem) => renderGridItem(gridItem))}
            </StyledGalleryItem>
        </div>
    )
}
