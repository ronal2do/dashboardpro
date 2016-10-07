import React, { Component } from 'react';

import './HeaderNav.css';

export default class HeaderNav extends Component {
  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
          <li>
              <a href="../charts.html">
                <i className="fa fa-line-chart"></i>
                {/*<p>Status</p>*/}
              </a>
          </li>
          <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-gavel"></i>
                  <p className="hidden-md hidden-lg">
                      Actions
                      <b className="caret"></b>
                  </p>
              </a>
              <ul className="dropdown-menu">
                  <li><a href="#">Create New Post</a></li>
                  <li><a href="#">Manage Something</a></li>
                  <li><a href="#">Do Nothing</a></li>
                  <li><a href="#">Submit to live</a></li>
                  <li className="divider"></li>
                  <li><a href="#">Another Action</a></li>
              </ul>
          </li>
          <li className="dropdown">
              <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-bell-o"></i>
                  <span className="notification">5</span>
                  <p className="hidden-md hidden-lg">
                  Notifications
                  <b className="caret"></b>
                </p>
              </a>
              <ul className="dropdown-menu">
                  <li><a href="#">Notification 1</a></li>
                  <li><a href="#">Notification 2</a></li>
                  <li><a href="#">Notification 3</a></li>
                  <li><a href="#">Notification 4</a></li>
                  <li><a href="#">Another notification</a></li>
              </ul>
          </li>
          <li className="dropdown dropdown-with-icons">
                    <a href="#" className="dropdown-toggle" data-toggle="dropdown">
                        <i className="fa fa-list"></i>
                        <p className="hidden-md hidden-lg">
                        More
                        <b className="caret"></b>
                      </p>
                    </a>
                    <ul className="dropdown-menu dropdown-with-icons">
                        <li>
                            <a href="#">
                                <i className="pe-7s-mail"></i> Messages
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="pe-7s-help1"></i> Help Center
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <i className="pe-7s-tools"></i> Settings
                            </a>
                        </li>
                        <li className="divider"></li>
                        <li>
                            <a href="#">
                                <i className="pe-7s-lock"></i> Lock Screen
                            </a>
                        </li>
                        <li>
                            <a href="#" className="text-danger">
                                <i className="pe-7s-close-circle"></i>
                                Log out
                            </a>
                        </li>
                    </ul>
                </li>
      </ul>
    );
  }
}
