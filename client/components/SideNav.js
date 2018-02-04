import React, {Component} from 'react';
import {NavLink} from 'react-router-dom';
import { Switch, Route } from 'react-router';
import {EmpContainer} from './EmployeeContainer';
import Home from './Home';

export default class SideNav extends Component{
    render(){
        return(
        <div>
            <aside>
                <ul id = "slide-out" className = "left side-nav fixed under-nav">
                <li className="nav-item active">
                    <NavLink to = '/home'><i className = "material-icons">home</i> <span className="sr-only">(current)</span></NavLink>
                </li>
                <li className="nav-item">
                    <NavLink to = '/employees'><i className = "material-icons">people</i></NavLink>
                </li>
                </ul> 
                <a href="#" data-activates = "slide-out" className = "button-collapse"><i className="material-icons">menu</i></a>
                
            </aside>
            <div className = 'container'>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path = "/home" component = {Home} />
                    <Route path="/employees" component={EmpContainer} />
                </Switch>
            </div>
        </div>
        )
    }
}