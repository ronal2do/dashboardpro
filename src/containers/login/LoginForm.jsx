import React, { Component } from 'react';

export default class LoginForm extends Component {
  constructor(props){
    super(props)

    this.state = {
      hidden: true
    }
  }
  componentDidMount() {
      setTimeout(() => this.setState({hidden: false}), 1500);
  }

  render() {
    const Class = this.state.hidden ? 'card card-hidden' : 'card';
    return (
      <form method="#" action="#">
          <div className={Class}>
              <div className="header text-center">Login</div>
              <div className="content">
                  <div className="form-group">
                      <label>Email address</label>
                      <input type="email" placeholder="Enter email" className="form-control"/>
                  </div>
                  <div className="form-group">
                      <label>Password</label>
                      <input type="password" placeholder="Password" className="form-control"/>
                  </div>
                  <div className="form-group">
                      <label className="checkbox">
                          <span className="icons"><span className="first-icon fa fa-square-o"></span><span className="second-icon fa fa-check-square-o"></span></span><input type="checkbox" data-toggle="checkbox" value=""/>
                          Subscribe to newsletter
                      </label>
                  </div>
              </div>
              <div className="footer text-center">
                  <button type="submit" className="btn btn-fill btn-warning btn-wd">Login</button>
              </div>
          </div>

      </form>
    );
  }
}
