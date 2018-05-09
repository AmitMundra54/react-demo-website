import React, { Component } from 'react';
import './sale.css';

export class Sale extends Component {
  render() {
    return (
      <div id="sale">
            <div className="sale-div container">
                <h1 className="sale-h1 white">Let our experts help you increase your sales!</h1>
                <h2 className="sale-h2 white">Complete the form to contact with us</h2>
                <a className="sale-a">FILL THE FORM</a>
            </div>
      </div>
    );
  }
}

