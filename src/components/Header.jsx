import React, { Component } from 'react';
import './style/Header.css';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        let headerStyle = {
            borderTop: '3px solid rgba(13,49,75,1)',
        };
        let headerTextStyle = {
            color: '#e0e0e0',
            textAlign: 'center',
            fontWeight: '300',
            fontStyle: 'normal',
            display: 'inline-block',
        };
        this.state = {
            name: this.props.name,
            headerStyle: headerStyle,
            headerTextStyle: headerTextStyle,
        };
    }

    render() {
        return (
            <div className="Header" style={this.state.headerStyle}>
                <NavLink to="/">
                <h1 style={this.state.headerTextStyle} className="HeaderText">
                    <span>Sammy Javed</span>
                </h1>
                </NavLink>
            </div>

        );
    }
}
