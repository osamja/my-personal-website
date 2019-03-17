import React, { Component } from 'react';
import './style/Header.css';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        let headerStyle = {
            color: '#e0e0e0',
            textAlign: 'center',
            fontWeight: '300',
            fontStyle: 'normal',
            display: 'inline-block',
        };
        let iconStyle = {
            marginRight: '12px',
        };
        this.state = {
            name: this.props.name,
            headerStyle: headerStyle,
            iconStyle: iconStyle,
        };
    }

    render() {
        return (

            <div className="Header">
                <NavLink to="/">
                <h1 style={this.state.headerStyle} className="HeaderText">
                    <span className="glyphicon glyphicon-home" style={this.state.iconStyle}>
                    </span>
                    <span>Sammy Javed</span>
                </h1>
                </NavLink>
            </div>

        );
    }
}
