import React, { Component } from 'react';

import Todo from '../../components/todo/Todo';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
            <div className="row">
                <Todo />
                <Todo />
            </div>
            <div className="row">
                <Todo />
                <Todo />
            </div>
      </div>
    );
  }
}
