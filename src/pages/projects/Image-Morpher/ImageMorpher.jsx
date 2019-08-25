import React, { Component } from 'react';
import axios from 'axios';

export default class ImageMorpher extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedFiles: null,
            loaded: 0,
        };
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onClickHandler = this.onClickHandler.bind(this);
    }

    isFilesValid = (files) => {
        const allowedFileTypes = ['image/png', 'image/jpeg'];
        let size = 2000000;     // 2MB max file size
        let is_files_valid = true;

        // Two files must be uploaded
        if (files.length !==  2) {
            is_files_valid = false;
            return is_files_valid;
        }

        // Both files must be under 2MB
        if (files[0].size > size || files[1].size > size) {
            is_files_valid = false;
            return is_files_valid;
        }

        // Check if the file type is valid
        if (!allowedFileTypes.includes(files[0].type) || !allowedFileTypes.includes(files[1].type)) {
            is_files_valid = false;
            return is_files_valid;
        }

        return is_files_valid;

    }

    onChangeHandler=event=>{
        var files = event.target.files;

        if (this.isFilesValid(files)) {
            // if return true allow to setState
            this.setState({
                selectedFiles: files,
                loaded: 1,
            })
        } else {
            files = null;
        }
    }

    onClickHandler = () => {
        let data = new FormData() ;
        data.append('Image-1', this.state.selectedFiles[0]);
        data.append('Image-2', this.state.selectedFiles[1]);

        debugger;
        axios.post("https://localhost:3000/morph", data)
        .then(res => { // then print response status
            console.log("Success!");
        })
        .catch(err => { // then print response status
            console.log(err);
            console.log(err.message);
            console.log("FAIL!");
            // toast.error('upload fail')
        })
    }

    render() {
        return (
            <div className="ImageMorpher" style={{color: "white", textAlign: "left", margin: "5%"}}>
                <h1>Image Morpher</h1>
                <p>
                  This application will allow you to morph two images together!
                </p>
                <div className="form-group files">
                    <label>Upload Your File </label>
                    <input type="file" className="form-control" multiple onChange={this.onChangeHandler}/>
                </div>  
                <div className="form-group">
                    {/* <ToastContainer />
                    <Progress max="100" color="success" value={this.state.loaded} >{Math.round(this.state.loaded,2) }%</Progress> */}
                </div> 
                <button type="button" className="btn btn-success btn-block" onClick={this.onClickHandler}>Upload</button>
            </div>
        );
    }
}
