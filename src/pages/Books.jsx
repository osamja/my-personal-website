import React, { Component } from 'react';

export default class Homepage extends Component {
    render() {
        return (
            <div className="Books" style={{color: "white"}}>
                <h1>
                    Books read in 2019
                </h1>
                <ul>
                    <li>The Road Less Traveled - M Scott Peck</li>
                </ul>
            </div>
        );
    }
}
