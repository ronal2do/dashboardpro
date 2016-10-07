import React, { Component } from 'react';

import Avatar from '../../media/default-avatar.png';

import './SidebarUser.css';

export default class SidebarUser extends Component {
  render() {
    return (
      <div className="user">
          <div className="photo">
              <img src={Avatar} role="presentation"/>
          </div>
          <div className="info">
              <a data-toggle="collapse" href="#collapseExample" className="collapsed" aria-expanded="false">
                  Tania Andrew
                  <b className="caret"></b>
              </a>
              <div className="collapse height" id="collapseExample" aria-expanded="false">
                  <ul className="nav">
                      <li><a href="#">My Profile</a></li>
                      <li><a href="#">Edit Profile</a></li>
                      <li><a href="#">Settings</a></li>
                  </ul>
              </div>
          </div>
      </div>
    );
  }
}
