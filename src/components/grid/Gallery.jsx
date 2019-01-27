import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';

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
            imageText: imageText,
            gridData: this.props.gridData,
        };
        this.renderGridItem = this.renderGridItem.bind(this);
    }

    renderGridItem(image_content, index) {
        let gridItem;
        if (image_content.redirect === true) {
            gridItem = (<a href={image_content.url}>
                <img src={image_content.src} alt={image_content.text.toString()}/>
                <h2 style={this.state.imageText}>{image_content.text}</h2>
            </a>)
        } else {
            gridItem = (
            <NavLink to={image_content.url}>
                <img src={image_content.src} alt={image_content.text.toString()}/>
                <h2 style={this.state.imageText}>{image_content.text}</h2>
            </NavLink>)
        }
        return (
            <div key={image_content.text.toString()}>
                {gridItem}
            </div>
        )
    }

    render() {
        return (
            <div className="gallery-container">
                <div className="gallery-grid">
                    {this.state.gridData.map(this.renderGridItem)}
                </div>
            </div>
        )
    }
}
