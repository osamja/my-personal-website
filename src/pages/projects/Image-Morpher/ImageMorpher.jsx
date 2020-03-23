import React from 'react';
import Upload from './Upload';
import MorphButton from './MorphButton';

function ImageMorpher () {
    return (
        <div className="ImageMorpher" style={{color: "white", textAlign: "left", margin: "2% 4%", backgroundColor: "#97B2F0"}}>
            <h1 style={{textAlign: 'center'}}>Face Morpher</h1>
            <Upload />
            <MorphButton />
            <div style={{display: 'flex', justifyContent: 'center'}}>
                {/* Leave space in alt, else morphed img does not render */}
                <img alt=" " src="" id="morphed-img" />
            </div>

            <div>
                <h1>Instructions</h1>
                <ol style={{fontSize: '20px'}}>
                    <li>Upload the start image by clicking the Upload Image button on the left</li>
                        <ul>
                            <li>For best results, upload images with a clear view of the face and similar dimensions</li>
                        </ul>
                    <li>Upload the end image by clicking the Upload Image button on the right</li>
                    <li>Click the Morph button</li>
                    <li>Once the morph completes, a link will appear below the morph button which you can navigate to download the morphed images</li>
                </ol>
            </div>
        </div>
    );
}

export default ImageMorpher;
