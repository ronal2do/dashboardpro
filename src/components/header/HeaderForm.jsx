import React, { Component } from 'react';

import './HeaderForm.css';

export default class HeaderForm extends Component {
  render() {
    return (
        <form className="navbar-form navbar-left navbar-search-form" role="search">
            <div className="input-group">
                <span className="input-group-addon"><i className="fa fa-search"></i></span>
                <input type="text" value="" className="form-control" placeholder="Search..." />
            </div>
        </form>
    );
  }
}
