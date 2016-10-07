import React, { Component } from 'react';

export default class Home extends Component {
  render() {
    return (
      <div className="container-fluid">
            <div className="row">
                <div className="col-md-12">
                    <div className="card " style={{height: '100vh'}}>
                        <div className="header">
                            <h4 className="title">Global Sales by Top Locations</h4>
                            <p className="category">All products that were shipped</p>
                        </div>
                    </div>
                </div>
            </div>
      </div>
    );
  }
}
