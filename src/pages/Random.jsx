import React, { Component } from 'react';

export default class Random extends Component {
    constructor(props) {
        super(props);
        let style = {
            color: '#e0e0e0',
            textAlign: 'center',
        };
        this.state = {
            name: this.props.name,
            style: style
        };

    }

    render() {
        return (
            <div className="Random">
                <h5 style={this.state.style}>I told you this page was going to be random!</h5>
            </div>
        );
    }
}
