import React, { Component } from 'react';

export default class Bio extends Component {
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

    // https://reactjsexample.com/a-vertical-timeline-component-for-react/

    render() {
        return (
            <div className="Bio">
                <h5 style={this.state.style}>Still working on this page.  Check back soon!</h5>
            </div>
        );
    }
}
