import React, { Component } from 'react';

import Header from '../header/Header';
import Footer from '../footer/Footer';

import './MainPanel.css';

export default class MainPanel extends Component {
  render() {
    return (
      <div className="main-panel">
        <Header />
        <div className="content">
          {this.props.children}
        </div>
        <Footer />
      </div>
    );
  }
}
