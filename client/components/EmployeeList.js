import React, {Component} from 'react';
import {array} from 'prop-types';
import EmployeeCardRow from './EmployeeCardRow';

export default class EmployeeList extends Component{
    static propTypes = {
        employees: array
    }
    static defaultProps = {
        employees : []
    }
    constructor(props){
        super(props)
        this.splitToChunks = this.splitToChunks.bind(this);
    }
    splitToChunks(){
        let chunks = 3; // items per chunk   
        return this.props.employees.reduce((ar, it, i) => { 
        
        const ix = Math.floor(i/chunks); 
        if(!ar[ix]) {
            ar[ix] = [];
        }
        ar[ix].push(it);
        return ar;
        }, [])
    }
    render(){
        /*
        3 -> 1/12 -> (1/3) * 1/4
        2 -> 1/6  -> (1/3) * 1/2
        1 -> 1/3  -> (1/3) * 1
        */
        const employeesChunks = this.splitToChunks();
        return(
          <div>
            <h1>Employees</h1>
            {employeesChunks.map(function(employeesChunk, i){
                return(
                  <EmployeeCardRow key = {i} employeesChunk = {employeesChunk} />
                )        
                }.bind(this))}
          </div>
        )
    }
}