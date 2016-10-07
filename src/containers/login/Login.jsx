import React, { Component } from 'react';

import LoginNav from './LoginNav';
import LoginForm from './LoginForm';

import background from '../../media/full-screen-image-3.jpg';

import './Login.css';

export default class Login extends Component {
  render() {
    return (
      <div>
        <LoginNav />
          <div className="wrapper wrapper-full-page">
            <div className="full-page login-page" data-color="red" data-image={background}>
              <div className="content">
                  <div className="container">
                      <div className="row">
                          <div className="col-md-4 col-sm-6 col-md-offset-4 col-sm-offset-3">
                            <LoginForm />

                          </div>
                      </div>
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
