import React, { Component } from 'react';

import './SidebarNav.css';

export default class SidebarNav extends Component {
  render() {
    return (
      <ul className="nav">
            <li>
                <a href="dashboard.html">
                    <i className="pe-7s-graph"></i>
                    <p>Dashboard</p>
                </a>
            </li>
            <li>
                <a data-toggle="collapse" href="#componentsExamples" className="collapsed" aria-expanded="false">
                    <i className="pe-7s-plugin"></i>
                    <p>Components
                       <b className="caret"></b>
                    </p>
                </a>
                <div className="collapse height" id="componentsExamples" aria-expanded="false">
                    <ul className="nav">
                        <li><a href="components/buttons.html">Buttons</a></li>
                        <li><a href="components/grid.html">Grid System</a></li>
                        <li><a href="components/icons.html">Icons</a></li>
                        <li><a href="components/notifications.html">Notifications</a></li>
                        <li><a href="components/panels.html">Panels</a></li>
                        <li><a href="components/sweet-alert.html">Sweet Alert</a></li>
                        <li><a href="components/typography.html">Typography</a></li>
                    </ul>
                </div>
            </li>

            <li>
                <a data-toggle="collapse" href="#formsExamples" className="collapsed" aria-expanded="false">
                    <i className="pe-7s-note2"></i>
                    <p>Forms
                       <b className="caret"></b>
                    </p>
                </a>
                <div className="collapse height" id="formsExamples" aria-expanded="false">
                    <ul className="nav">
                        <li><a href="forms/regular.html">Regular Forms</a></li>
                        <li><a href="forms/extended.html">Extended Forms</a></li>
                        <li><a href="forms/validation.html">Validation Forms</a></li>
                        <li><a href="forms/wizard.html">Wizard</a></li>
                    </ul>
                </div>
            </li>

            <li>
                <a data-toggle="collapse" href="#tablesExamples" className="collapsed" aria-expanded="false">
                    <i className="pe-7s-news-paper"></i>
                    <p>Tables
                       <b className="caret"></b>
                    </p>
                </a>
                <div className="collapse height" id="tablesExamples" aria-expanded="false">
                    <ul className="nav">
                        <li><a href="tables/regular.html">Regular Tables</a></li>
                        <li><a href="tables/extended.html">Extended Tables</a></li>
                        <li><a href="tables/bootstrap-table.html">Bootstrap Table</a></li>
  				              <li><a href="tables/datatables.net.html">DataTables.net</a></li>
                    </ul>
                </div>
            </li>

            <li>
                <a data-toggle="collapse" href="#mapsExamples" className="collapsed" aria-expanded="false">
                    <i className="pe-7s-map-marker"></i>
                    <p>Maps
                       <b className="caret"></b>
                    </p>
                </a>
                <div className="collapse height" id="mapsExamples" aria-expanded="false" >
                    <ul className="nav">
                        <li><a href="maps/google.html">Google Maps</a></li>
                        <li><a href="maps/vector.html">Vector Maps</a></li>
                        <li><a href="maps/fullscreen.html">Full Screen Map</a></li>
                    </ul>
                </div>
            </li>

            <li className="active">
                <a href="charts.html">
                    <i className="pe-7s-graph1"></i>
                    <p>Charts</p>
                </a>
            </li>

            <li>
                <a href="calendar.html">
                    <i className="pe-7s-date"></i>
                    <p>Calendar</p>
                </a>
            </li>

            <li>
                <a data-toggle="collapse" href="#pagesExamples" className="collapsed" aria-expanded="false">
                    <i className="pe-7s-gift"></i>
                    <p>Pages
                       <b className="caret"></b>
                    </p>
                </a>
                <div className="collapse height" id="pagesExamples" aria-expanded="false">
                    <ul className="nav">
                        <li><a href="pages/login.html">Login Page</a></li>
                        <li><a href="pages/register.html">Register Page</a></li>
                        <li><a href="pages/lock.html">Lock Screen Page</a></li>
                        <li><a href="pages/user.html">User Page</a></li>
                        <li><a href="#">More coming soon...</a></li>
                    </ul>
                </div>
            </li>
        </ul>
    );
  }
}
