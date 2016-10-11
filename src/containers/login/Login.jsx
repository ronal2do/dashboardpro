import React, { Component } from 'react';

import LoginNav from './LoginNav';
import LoginForm from './LoginForm';
import Register from './Register';

import background from '../../media/full-screen-image-3.jpg';

import './Login.css';

export default class Login extends Component {
  constructor(props){
    super(props)

    this.state = {
      login: true
    }

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState({
      login: !this.state.login
    });
  }


  render() {
    const loginForm = this.state.login ? <LoginForm /> : <Register />;

    return (
      <div>
        <LoginNav />
          <div className="wrapper wrapper-full-page">
            <div className="full-page login-page" data-color="red" data-image={background}>
              <div className="content">
                <div className="text-center">
                  <button onClick={this.handleClick}>trocar (depois colocar um swith)</button>
                </div>
                <div className="container" style={{paddingTop:'20px'}}>
                  {loginForm}
                </div>

              </div>

          	<footer className="footer footer-transparent">
                  <div className="container">
                      <nav className="pull-left">
                          <ul>
                              <li>
                                  <a href="#">
                                      Home
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                      Company
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                      Portfolio
                                  </a>
                              </li>
                              <li>
                                  <a href="#">
                                     Blog
                                  </a>
                              </li>
                          </ul>
                      </nav>
                      <p className="copyright pull-right">
                          © 2016 <a href="http://www.creative-tim.com">Creative Tim</a>, made with love for a better web
                      </p>
                  </div>
              </footer>
              <div className="full-page-background" style={{backgroundImage: 'url(' + background + ')'}} ></div>
            </div>
          </div>
      </div>
    );
  }
}
