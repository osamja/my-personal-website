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
                <p>
                    Hey there, I'm Sammy.  I'm a software developer in the San Francisco Bay Area.
                </p>
                <h5>Occupation: Software Developer at Adobe</h5>
                <h5>Location: San Francisco Bay Area</h5>
                <h5>Favorite Movies: Back to the Future, The Matrix</h5>
                <h5>Education: UC Berkeley</h5>
                <h5>Degree: Computer Science</h5>
                <h5>Hobbies: Guitar & Photography</h5>
            </div>
        );
    }
}
