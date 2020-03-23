import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import { uploadImageLeft, uploadImageRight } from '../../../scripts/Redux/actions/imageMorpher';
import { connect } from 'react-redux';
import _ from 'lodash';

function DropzoneContainer({
    dropzoneText,
    dropzoneColor,
    gridColumn,
    onUploadLeftImg,
    onUploadRightImg,
    isLeftImageUploaded,
    isRightImageUploaded,
}) {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log('hey sammy');
    if (dropzoneText === 'left') {
      const image = document.getElementById('leftDropzoneImg');
      image.src = URL.createObjectURL(acceptedFiles[0]);
      onUploadLeftImg(acceptedFiles);
    } else if (dropzoneText === 'right') {
      const image = document.getElementById('rightDropzoneImg');
      image.src = URL.createObjectURL(acceptedFiles[0]);
      onUploadRightImg(acceptedFiles);
    }
  }, []);
  
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  const inputID = dropzoneText + '-dropzone-input';

  const dropzoneStyleContainer = {
    backgroundColor: dropzoneColor,
    height: '250px',
    gridRowStart: '1',
    gridColumnStart: gridColumn,
  };

  const Dropzone = () => {
    let message;
    if (isLeftImageUploaded && isRightImageUploaded) {
      message = 'Click the morph button';
    } else if (dropzoneText==='left' && isLeftImageUploaded) {
      message = 'Left image has been uploaded';
    } else if (dropzoneText==='right' && isRightImageUploaded) {
      message = 'Right image has been uploaded';
    } else {
      message = "Drag or drop an image of a face here ...";
    }

    let imgID = dropzoneText + "DropzoneImg";

    return (
      <React.Fragment>
        <div style={dropzoneStyleContainer}>
          <div {...getRootProps()} style={dropzoneStyleContainer}>
            <input {...getInputProps()} id={inputID}/>
            {
              <div style={{textAlign: 'center' }} id="dropzoneContentContainer"> 
                  {/* <p>{message}</p> */}
                  <button>Upload</button>
                {/* <p style={{display: 'inline'}}>or click</p>  <p style={{display: 'inline'}}>to select a file</p> */}
                <img id={imgID} src="" alt=" " style={{width: '100px', height: '100px'}}/>
              </div>
            }
          </div>
        </div>
      </React.Fragment>
    );
  };

  return Dropzone();

}

const mapStateToProps = state => ({
  isLeftImageUploaded: state.imageMorpher.leftImage,
  isRightImageUploaded: state.imageMorpher.rightImage,
  leftImageSrc: _.get(state, 'imageMorpher.leftImage.file[0].path'),
  rightImageSrc: _.get(state, 'imageMorpher.rightImage.file[0].path'),
});
  
const mapDispatchToProps = dispatch => ({
  onUploadLeftImg: (acceptedFiles) => dispatch(uploadImageLeft(acceptedFiles)),
  onUploadRightImg: (acceptedFiles) => dispatch(uploadImageRight(acceptedFiles))
});

export default connect (
  mapStateToProps,
    mapDispatchToProps
  )(DropzoneContainer)
