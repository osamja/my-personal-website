import React, {useCallback} from 'react'
import {useDropzone} from 'react-dropzone'

export default function MyDropzone() {
  const onDrop = useCallback(acceptedFiles => {
    // Do something with the files
    console.log('hey sammy')
  }, []);
  const {getRootProps, getInputProps} = useDropzone({onDrop});

  const dropzoneStyleContainer = {
    display: 'grid',
    gridGap: '100px',
  };

  const dropzoneStyleContainerLeft = {
    backgroundColor: 'lightcoral',
    height: '250px',
    gridColumn: '50px',
    gridRowStart: '1',
    gridColumnStart: '1',
  };

  const dropzoneStyleContainerRight = {
    backgroundColor: 'lightblue',
    height: '250px',
    gridColumn: '50px',
    gridRowStart: '1',
    gridColumnStart: '2',
  };

  return (
    <div style={dropzoneStyleContainer}>
      <div {...getRootProps()} style={dropzoneStyleContainerLeft}>
        <input {...getInputProps()} />
        {
            <div style={{textAlign: 'center' }}> 
            <p>Drag or drop the first face image here ...</p>
            <p style={{display: 'inline'}}>or click</p> <button>Upload</button> <p style={{display: 'inline'}}>to select a file</p>
          </div>
        }
      </div>
      <div {...getRootProps()} style={dropzoneStyleContainerRight}>
        <input {...getInputProps()} />
        {
            <div style={{textAlign: 'center' }}> 
              <p>Drag or drop the second face image here ...</p>
              <p style={{display: 'inline'}}>or click</p> <button>Upload</button> <p style={{display: 'inline'}}>to select a file</p>
            </div>
        }
      </div>
    </div>
  )
}
