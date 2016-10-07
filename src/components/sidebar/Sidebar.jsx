import React, { Component } from 'react';

import Logo from '../logo/Logo';
import SidebarUser from './SidebarUser';
import SidebarNav from './SidebarNav';

import background from '../../media/full-screen-image-3.jpg';

import './Sidebar.css';

export default class Sidebar extends Component {
  render() {
    return (
      <div className="sidebar" data-color="red" data-image={background}>
          <Logo />
        	<div className="sidebar-wrapper">
            <SidebarUser />
            <SidebarNav />
        	</div>
          <div className="sidebar-background" style={{backgroundImage: 'url(' + background + ')'}}/>
      </div>
    );
  }
}
