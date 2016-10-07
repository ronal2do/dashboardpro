import React, { Component } from 'react';
import './App.css';

import Sidebar from '../../components/sidebar/Sidebar';
import MainPanel from '../../components/main-panel/MainPanel';

class App extends Component {
  render() {
    return (
      <div className="sidebar-mini">
        <div className="wrapper">
          <Sidebar />
          <MainPanel>
            {this.props.children}
          </MainPanel>
        </div>
      </div>
    );
  }
}

export default App;
