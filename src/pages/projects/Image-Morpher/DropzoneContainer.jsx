import React, {useCallback} from 'react';
import {useDropzone} from 'react-dropzone';
import { uploadImageLeft, uploadImageRight } from '../../../scripts/Redux/actions/imageMorpher';
import { connect } from 'react-redux';
import _ from 'lodash';
import { Button } from '@bootstrap-styled/v4';

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
      // const image = document.getElementById('leftDropzoneImg');
      // image.src = URL.createObjectURL(acceptedFiles[0]);
      onUploadLeftImg(acceptedFiles);
    } else if (dropzoneText === 'right') {
      // const image = document.getElementById('rightDropzoneImg');
      // image.src = URL.createObjectURL(acceptedFiles[0]);
      onUploadRightImg(acceptedFiles);
    }
  }, []);
  
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  const inputID = dropzoneText + '-dropzone-input';

  const dropzoneStyleContainer = {
    backgroundColor: dropzoneColor,
    height: '100px',
    gridRowStart: '1',
    gridColumnStart: gridColumn,
    borderRadius: '20px',
    textAlign: 'center',
  };

  let uploadButton
  if ((dropzoneText === 'left' && isLeftImageUploaded) || (dropzoneText === 'right' && isRightImageUploaded)) {
    uploadButton = <Button style={{marginTop: '25px'}} disabled>Uploaded</Button>;
  } else {
    uploadButton = <Button style={{marginTop: '25px'}}>Upload</Button>;
  }

  const Dropzone = () => {
    return (
      <React.Fragment>
        <div style={dropzoneStyleContainer} {...getRootProps()}>
        <input {...getInputProps()} id={inputID}/>
          {uploadButton}
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
