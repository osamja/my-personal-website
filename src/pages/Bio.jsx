import React, { Component } from 'react';

export default class Bio extends Component {
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

    static getAgeInYears() {
        let curDate = new Date();
        let birthDate = new Date('Jan 1, 1994');

        let diff = curDate.getTime() - birthDate.getTime();
        let ageInYears = Math.floor(diff / (1000 * 60 * 60 * 24 * 365.25));
        return (<span>{ageInYears}</span>);
    }

    // https://reactjsexample.com/a-vertical-timeline-component-for-react/

    render() {
        return (
            <div className="Bio" style={this.state.style}>
                <p>Hey there, I'm Sammy.  </p>
                <p>I'm a software developer in the San Francisco Bay Area.</p>
                <p>My interests are building cool things (software), shooting travel videos, and occasionaly picking up the guitar.</p>
            </div>
        );
    }
}
