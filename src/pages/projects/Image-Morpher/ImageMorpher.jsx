import React, { Component } from 'react';
import axios from 'axios';
import Upload from './Upload';
import MorphButton from './MorphButton';

const base_url = 'http://sammyjaved.com:8088';
const morph_endpoint = base_url + '/morph/';


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

    appendImage = imgSrc => {
        var image = new Image();
        image.src = imgSrc;
        document.body.appendChild(image);
    }

    onClickHandler = () => {
        let data = new FormData() ;
        data.append('Image-1', this.state.selectedFiles[0]);
        data.append('Image-2', this.state.selectedFiles[1]);

        axios.post(morph_endpoint, data, {headers: {'Authorization': 'ImageMorpherV1'}})
        .then(response => {
            console.log(response);
            let imgSrc = response.data;
            this.appendImage(imgSrc);
            console.log("Success!");
        })
        .catch(error => console.error(error));
    }

    render() {
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
}
