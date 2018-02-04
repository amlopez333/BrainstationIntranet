import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Switch, Route } from 'react-router';


export default class NavBar extends Component{
    render(){
      return(
        <div>
          <div className = 'wrappert'>
            <div className = "">
              <ul id="dropdown1" className="dropdown-content">
                <li><a href="#!">User Profile</a></li>
                <li><a href="#!">Settings</a></li>
                <li className="divider" />
                <li><a href="#!">Logout</a></li>
              </ul>
              <div className = 'navbar-fixed'>
                <nav>
                  <div className = 'nav-wrapper  container'>
                  <a className="brand-logo" href="/">Intranet</a>
                  <ul className = 'right hide-on-med-and-down'>
                    <li>
                      <a className="dropdown-button" href="#!" data-activates="dropdown1">
                        Profile
                        <i className="material-icons right">arrow_drop_down</i>
                      </a>
                    </li>
                  </ul>
                  </div>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )
    }
}