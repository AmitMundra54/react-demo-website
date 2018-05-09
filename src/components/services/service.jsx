import './service.css';

import React, { Component } from 'react';
import './service.css';

export class Service extends Component {
  render() {
    return (
        <div className="col-lg-3 col-md-3 col-sm-12 service">
            <h1>{this.props.title}</h1>
            <p>{this.props.para}</p>
        </div>
    );
  }
}
