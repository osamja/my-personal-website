import React, { Component } from 'react';

export default class TheRise extends Component {
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
            <div className="TheRise" style={this.state.style}>
                <p>Market Entry: 752 79 22</p>
                <p>elevator 1: 243 24 03</p>
                <p>elevator 2: 802 34 27</p>
                <p>unit: 3010022503</p>
                <p>I'm a software developer in the San Francisco Bay Area.</p>
                <p>My interests are building cool things (software), shooting travel videos, and occasionaly picking up the guitar.</p>
            </div>
        );
    }
}
