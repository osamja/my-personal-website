import React, { Component } from 'react';
import './style/Header.css';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
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
            <NavLink to="/">
            <div className="Header">
                <h1 style={this.state.style}>Sammy Javed</h1>
            </div>
            </NavLink>
        );
    }
}
