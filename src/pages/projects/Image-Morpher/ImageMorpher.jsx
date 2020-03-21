import React from 'react';
import Upload from './Upload';
import MorphButton from './MorphButton';

function ImageMorpher () {
    return (
        <div className="ImageMorpher" style={{color: "white", textAlign: "left", margin: "2% 4%"}}>
            <h1 style={{textAlign: 'center'}}>Face Morpher</h1>
            <Upload />
            <MorphButton />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {/* Leave space in alt, else morphed img does not render */}
                <img alt=" " src="" id="morphed-img" />
            </div>
        </div>
    );
}

export default ImageMorpher;
