import React, { Component } from 'react';
import './style/Header.css';
import {NavLink} from 'react-router-dom';
import {
  getBaseUrl,
  getBasePath,
} from '../scripts/Routes/images.js';

export default class Header extends Component {
  getHeaderIconPath() {
    return (getBaseUrl() + '/' + getBasePath() + '/home-icon.png');
  }

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
      let homeIconStyle = {
        position: "relative",
        top: "7px",
      };
        this.state = {
            name: this.props.name,
            headerStyle: headerStyle,
            headerTextStyle: headerTextStyle,
            headerIconPath: this.getHeaderIconPath(),
            homeIconStyle: homeIconStyle,
        };
    }



    render() {
        return (
            <div className="Header" style={this.state.headerStyle}>
                <NavLink to="/">
                <img src={this.state.headerIconPath} style={this.state.homeIconStyle}/>
                <h1 style={this.state.headerTextStyle} className="HeaderText">
                    <span>Sammy Javed</span>
                </h1>
                </NavLink>
            </div>

        );
    }
}
