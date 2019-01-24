import React, { Component } from 'react';
import {imgUrls} from '../../scripts/GalleryImages';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Gallery extends Component {
    constructor(props) {
        super(props);
        let imageText = {
            color: 'white',
            position: 'absolute',
            top: '12px',
            left: '12px',
            backgroundColor: 'black',
            opacity: '0.7',
        };
        this.state = {
            currentIndex: null,
            imageText: imageText
        };
        this.renderImageContent = this.renderImageContent.bind(this);
    }

    renderImageContent(image_content, index) {
        return (
            <div key={image_content.text.toString()}>
                <a href={image_content.url}>
                    <img src={image_content.src} alt={image_content.text.toString()}/>
                    <h2 style={this.state.imageText}>{image_content.text}</h2>
                </a>
            </div>
        )
    }

    render() {
        return (
            <div className="gallery-container">
                <div className="gallery-grid">
                    {imgUrls.map(this.renderImageContent)}
                </div>
            </div>
        )
    }
}
