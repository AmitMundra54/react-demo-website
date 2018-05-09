import React, { Component } from 'react';
import './contact.css';


export class FormInput extends Component {
  render() {
    return (
            <div className="col-md-6 col-lg-6 col-sm-12"> 
            <input name={this.props.name} id={this.props.id} type={this.props.type} placeholder={this.props.placeholder} />
            </div>
    );
  }
}

