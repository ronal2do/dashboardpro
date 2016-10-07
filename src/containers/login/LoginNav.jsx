import React, { Component } from 'react';

import './LoginNav.css';

export default class LoginNav extends Component {
  render() {
    return (
      <nav className="navbar navbar-transparent navbar-absolute">
          <div className="container">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#navigation-example-2">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="../dashboard.html">Dashboard</a>
              </div>
              <div className="collapse navbar-collapse">

                  <ul className="nav navbar-nav navbar-right">
                      <li>
                         <a href="register.html">
                              Register
                          </a>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
    );
  }
}
