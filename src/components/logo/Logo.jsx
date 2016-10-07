import React, { Component } from 'react';
import './Logo.css';

export default class Logo extends Component {
  render() {
    return (
      <div>
        <div className="logo">
            <a href="http://www.creative-tim.com" className="logo-text">
                Creative Tim
            </a>
        </div>
        <div className="logo logo-mini">
          <a href="http://www.creative-tim.com" className="logo-text">
            Ct
          </a>
        </div>
      </div>
    );
  }
}
