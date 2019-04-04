import React, { Component } from 'react';
import {NavLink} from 'react-router-dom';
import '../style/Prose.css';

export default class Prose extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: null,
            textData: this.props.textData,
        };
        this.renderTextItem = this.renderTextItem.bind(this);
    }

    renderTextItem(text_content, index) {
        let textItem;
        if (text_content.redirect === true) {
            textItem = (<a href={text_content.url} target="_blank" rel="noopener noreferrer">
                <img src={text_content.src} alt={text_content.text.toString()}/>
                <h2 style={this.state.textText}>{text_content.text}</h2>
            </a>)
        } else {
            textItem = (
                <NavLink to={text_content.url}>
                    <img src={text_content.src} alt={text_content.text.toString()}/>
                    <h2 style={this.state.textText}>{text_content.text}</h2>
                </NavLink>)
        }
        return (
            <div className="text-item" key={text_content.text.toString()}>
                {textItem}
            </div>
        )
    }

    render() {
        return (
            <div className="gallery-container">
                <div className="gallery-text">
                    {this.state.textData.map(this.rendertextItem)}
                </div>
            </div>
        )
    }
}
