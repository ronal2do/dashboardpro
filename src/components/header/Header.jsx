import React, { Component } from 'react';
import HeaderForm from './HeaderForm';
import HeaderNav from './HeaderNav';

import './Header.css';

export default class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-default navbar-fixed">
          <div className="container-fluid">
      				<div className="navbar-minimize">
      					<button className="btn btn-warning btn-fill btn-round btn-icon">
        				{/*<i className="fa fa-ellipsis-v visible-on-sidebar-regular"></i>*/}
      						<i className="fa fa-navicon visible-on-sidebar-mini"></i>
      					</button>
      				</div>
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse">
                      <span className="sr-only">Toggle navigation</span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                      <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="#">Dashboard PRO v1</a>
              </div>
              <div className="collapse navbar-collapse">
                <HeaderForm />
                <HeaderNav />
              </div>
          </div>
      </nav>
    );
  }
}
