import React, {Component} from 'react';
import {string, number} from 'prop-types';

export default class Employee extends Component{
    static propTypes = {
        name: string,
        companyEmail: string,
        personalEmail: string,
        extension: string,
        personalPhone: string,
        imgUrl: string,
        columnCount: number
    }
    static defaultProps = {
        name: '',
        companyEmail: '',
        personalEmail: '',
        extension: '',
        personalPhone: '',
        imgUrl: '',
        columnCount: 12
    }
    render(){
      
        return(
          <div className = {`col l${this.props.columnCount}`}>
            <div className = "card card-custom">
              <div className = 'card-image'>
                <img src = {this.props.imgUrl} alt = "Card image cap" />
              </div>
              <div className="card-content">
                <h5 className = "card-title text-center">{this.props.name}</h5>
                <ul className = "collection">
                  <li className = "collection-item">{this.props.companyEmail}</li>
                  <li className = "collection-item">{`Personal Email: ${this.props.personalEmail}`}</li>
                  <li className = "collection-item">{`Extension: ${this.props.extension}`}</li>
                  <li className = "collection-item">{`Personal Phone #: ${this.props.personalPhone}`}</li>
                </ul>
              </div>
            </div>
          </div>
        )
    }
}
