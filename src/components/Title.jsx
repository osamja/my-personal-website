import React, { Component } from 'react';
import Header from '../components/Header';

export default class Title extends Component {
    constructor(props) {
        super(props);
        let style = {
            color: '#e0e0e0',
            textAlign: 'center',
            // fontSize: 32
        };
        this.state = {
            name: this.props.name,
            style: style
        };

    }

    render() {
        return (
            <div className="Title">
                <h5 style={this.state.style}>Welcome to my webpage!  I'm currently rebuilding this site.</h5>
                <h5 style={this.state.style}>In the meantime, here are some really blurry images.</h5>
            </div>
        );
    }
}
