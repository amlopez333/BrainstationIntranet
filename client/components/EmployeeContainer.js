import React, {Component} from 'react';
import {connect} from 'react-redux';
import {array, func, bool} from 'prop-types';
import EmployeeList from './EmployeeList';
import { getEmployees } from '../../redux/action_creators';

export default class EmployeeContainer extends Component{
    static propTypes = {
        employees: array,
        getEmployees: func,
        isLoading: bool
    }

    static defaultProps = {
        employees : [],
        getEmployees: function(){},
        isLoading: true
    }
    constructor(props){
        super(props);
        
    }
    componentDidMount(){
        return this.props.getEmployees();
    }
    render(){
      return (<EmployeeList employees = {this.props.employees} isLoading = {this.props.isLoading} />)
    }
}

const mapStateToProps = function(state){
    return {
        employees: state.employees,
        isLoading: state.isLoading
    }
}

const mapDispatchToProps = function(dispatch){
    return {
        getEmployees: dispatch(getEmployees())
    }
}

export const EmpContainer = connect(mapStateToProps, mapDispatchToProps)(EmployeeContainer)