import React, { Component } from 'react';

import './Todo.css';

export default class Todo extends Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="card ">
           <div className="header">
              <h4 className="title">Tasks</h4>
              <p className="category">Backend development</p>
          </div>
           <div className="content">
              <div className="table-full-width">
                  <table className="table">
                      <tbody>
                          <tr>
                              <td>
                                  <label className="checkbox">
                                      <span className="icons"><span className="first-icon fa fa-square-o"></span><span className="second-icon fa fa-check-square-o"></span></span><input type="checkbox" value="" data-toggle="checkbox"/>
                                  </label>
                              </td>
                              <td>Sign contract for "What are conference organizers afraid of?"</td>
                              <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                                      <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                      <i className="fa fa-times"></i>
                                  </button>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label className="checkbox checked">
                                      <span className="icons"><span className="first-icon fa fa-square-o"></span><span className="second-icon fa fa-check-square-o"></span></span><input type="checkbox" value="" data-toggle="checkbox" checked="" />
                                  </label>
                              </td>
                              <td>Lines From Great Russian Literature? Or E-mails From My Boss?</td>
                              <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                                      <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                      <i className="fa fa-times"></i>
                                  </button>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label className="checkbox checked">
                                      <span className="icons"><span className="first-icon fa fa-square-o"></span><span className="second-icon fa fa-check-square-o"></span></span><input type="checkbox" value="" data-toggle="checkbox" checked="" />
                                  </label>
                              </td>
                              <td>Flooded: One year later, assessing what was lost and what was found when a ravaging rain swept through metro Detroit
                              </td>
                              <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                                      <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                      <i className="fa fa-times"></i>
                                  </button>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label className="checkbox">
                                      <span className="icons">
                                        <span className="first-icon fa fa-square-o"></span>
                                        <span className="second-icon fa fa-check-square-o"></span>
                                      </span>
                                      <input type="checkbox" value="" data-toggle="checkbox"/>
                                  </label>
                              </td>
                              <td>Create 4 Invisible User Experiences you Never Knew About</td>
                              <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                                      <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                      <i className="fa fa-times"></i>
                                  </button>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label className="checkbox">
                                      <span className="icons"><span className="first-icon fa fa-square-o"></span><span className="second-icon fa fa-check-square-o"></span></span><input type="checkbox" value="" data-toggle="checkbox"/>
                                  </label>
                              </td>
                              <td>Read "Following makes Medium better"</td>
                              <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                                      <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                      <i className="fa fa-times"></i>
                                  </button>
                              </td>
                          </tr>
                          <tr>
                              <td>
                                  <label className="checkbox">
                                      <span className="icons"><span className="first-icon fa fa-square-o"></span><span className="second-icon fa fa-check-square-o"></span></span><input type="checkbox" value="" data-toggle="checkbox"/>
                                  </label>
                              </td>
                              <td>Unfollow 5 enemies from twitter</td>
                              <td className="td-actions text-right">
                                  <button type="button" rel="tooltip" title="" className="btn btn-info btn-simple btn-xs" data-original-title="Edit Task">
                                      <i className="fa fa-edit"></i>
                                  </button>
                                  <button type="button" rel="tooltip" title="" className="btn btn-danger btn-simple btn-xs" data-original-title="Remove">
                                      <i className="fa fa-times"></i>
                                  </button>
                              </td>
                          </tr>
                      </tbody>
                  </table>
              </div>
           </div>
           <div className="footer">
              <hr />
              <div className="stats">
                  <i className="fa fa-history"></i> Updated 3 minutes ago
              </div>
          </div>
        </div>
      </div>
    );
  }
}
