import React, {Component} from 'react';
import {array} from 'prop-types';
import Employee from './Employee';

export default class EmployeeCardRow extends Component{
    static propTypes = {
        employeesChunk: array
    }
    static defaultProps = {
        employeesChunk: []
    }
    render(){
        return(
          <div className = 'row'>
            {this.props.employeesChunk.map(function(employee){
                    return(
                      <Employee
                        key = {employee.id} 
                        name = {employee.name}
                        companyEmail = {employee.companyEmail}
                        personalEmail = {employee.personalEmail}
                        extension = {employee.extension}
                        personalPhone = {employee.personalPhone}
                        imgUrl = {employee.imgUrl}
                        columnCount = {4}
                      />
                    )
                }.bind(this))}
          </div>
        )
    }

}