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
      let homeIconStyle = {
        position: "relative",
        top: "7px",
      };
        this.state = {
            name: this.props.name,
            headerTextStyle: headerTextStyle,
            headerIconPath: this.getHeaderIconPath(),
            homeIconStyle: homeIconStyle,
        };
    }



    render() {
        return (
            <div className="Header">
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
