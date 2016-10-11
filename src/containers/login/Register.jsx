import React, { Component } from 'react';

export default class Register extends Component {
  constructor(props){
    super(props)
    this.state = {
      hidden: true
    }
  }

  componentDidMount() {
    setTimeout(() => this.setState({hidden: false}), 1000);
  }

  render() {
    const Class = this.state.hidden ? 'card card-hidden' : 'card card-plain';
    return (
      <div className="row">
        <div className="col-md-4 col-md-offset-2">
            <div className="media">
                <div className="media-left">
                    <div className="icon">
                        <i className="pe-7s-user"></i>
                    </div>
                </div>
                <div className="media-body">
                    <h4>Free Account</h4>
                    Here you can write a feature description for your dashboard, let the users know what is the value that you give them.
                </div>
            </div>
            <div className="media">
                <div className="media-left">
                    <div className="icon">
                        <i className="pe-7s-graph1"></i>
                    </div>
                </div>
                <div className="media-body">
                    <h4>Awesome Performances</h4>
                    Here you can write a feature description for your dashboard, let the users know what is the value that you give them.

                </div>
            </div>
            <div className="media">
                <div className="media-left">
                    <div className="icon">
                        <i className="pe-7s-headphones"></i>
                    </div>
                </div>
                <div className="media-body">
                    <h4>Global Support</h4>
                    Here you can write a feature description for your dashboard, let the users know what is the value that you give them.

                </div>
            </div>
        </div>
        <div className="col-md-4 col-md-offset-s1">
            <form method="#" action="#">
              <div className={Class}>
                    <div className="content">
                        <div className="form-group">
                            <input type="email" placeholder="Your First Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Your Last Name" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Company" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="email" placeholder="Enter email" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" className="form-control" />
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password Confirmation" className="form-control" />
                        </div>
                    </div>
                    <div className="footer text-center">
                        <button type="submit" className="btn btn-fill btn-neutral btn-wd">Create Free Account</button>
                    </div>
                </div>
            </form>
        </div>
      </div>
    );
  }
}
