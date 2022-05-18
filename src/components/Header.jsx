import React, { Component } from 'react';
import './style/Header.css';
import {NavLink} from 'react-router-dom';
import {
  getBaseUrl,
  getBasePath,
} from '../scripts/Routes/images.js';

export default class Header extends Component {
  getHeaderIconPath() {
    return (getBaseUrl() + '/' + getBasePath() + '/home-icon3.png');
  }

    constructor(props) {
        super(props);
        let headerTextStyle = {
            color: '#e0e0e0',
            textAlign: 'center',
            fontWeight: '300',
            fontStyle: 'normal',
            display: 'inline-block',
        };
        this.state = {
            name: this.props.name,
            headerTextStyle: headerTextStyle,
            headerIconPath: this.getHeaderIconPath(),
        };
    }

    render() {
        return (
            <div className="Header" style={{marginTop: '15px'}}>
                <NavLink to="/">
                <h1 style={this.state.headerTextStyle} className="HeaderText">
                    <span>Sammy Javed</span>
                </h1>
                </NavLink>
                <br />
                <a href="https://twitter.com/osamja24" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-twitter" />
                </a>
                {/* Hide LinkedIn icon */}
                <a href="https://www.linkedin.com/in/sammy-javed-991a4a72/" target="_blank" rel="noopener noreferrer">
                    <i class="fa fa-linkedin" />
                </a>
            </div>
        );
    }
}
