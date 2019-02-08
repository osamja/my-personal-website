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
                    I am approximately {Bio.getAgeInYears()} years old.
                </p>
                <ul>
                    <li>Occupation: Software Developer</li>
                    <li>Location: San Francisco Bay Area</li>
                    <li>Favorite Movie: Back to the Future</li>
                    <li>2nd Favorite Movie: The Matrix</li>
                    <li>Favorite Book: Harry Potter 4 (Goblet)</li>
                    <li>Education: UC Berkeley</li>
                    <li>Degree: Computer Science</li>
                </ul>
            </div>
        );
    }
}
