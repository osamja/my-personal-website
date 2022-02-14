import React from 'react';
import Upload from './Upload';
import MorphButton from './MorphButton';

function ImageMorpher () {

    return(
        <div>
            <p>
                See <a href='https://apps.apple.com/us/app/mymorph/id1554421298'>iOS app</a> developed with my younger brother
            </p>
        </div>
    )

    // TODO: Replace this deprecated web app with the react native build
    return (
        <div className="ImageMorpher" style={{color: "white", textAlign: "left", margin: "2% 4%"}}>
            <h1 style={{textAlign: 'center'}}>Face Morpher</h1>
            <Upload />
            <MorphButton />

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
