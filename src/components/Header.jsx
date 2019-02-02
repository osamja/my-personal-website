import React, { Component } from 'react';
import './style/Header.css';
import {NavLink} from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props);
        let style = {
            color: '#e0e0e0',
            textAlign: 'center',
            fontFamily: 'rig-solid-light-fill',
            fontWeight: '300',
            fontStyle: 'normal',
            display: 'inline-block',
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
                <link rel="stylesheet" href="https://use.typekit.net/pxs6ily.css">

                </link>
                <h1 style={this.state.style} className="HeaderText">Sammy Javed</h1>
            </div>
            </NavLink>
        );
    }
}
