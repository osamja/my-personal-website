import React, { Component } from 'react';
import Title from '../components/Title';
import Gallery from '../components/grid/Gallery';

export default class Homepage extends Component {
    render() {
        return (
            <div className="Homepage">
                <Gallery/>
            </div>
        );
    }
}
