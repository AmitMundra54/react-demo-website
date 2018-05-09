import React, { Component } from 'react';
import './product.css';

export class Product extends Component {
  render() {
    return (
      <div className="space product border col-lg-3 col-md-3 col-sm-12 align-left">
        <img src={this.props.src}/>
        <h2>{this.props.title}</h2>
        <p >{this.props.para}</p>
        <a className="product-a"> <strong>LEARN MORE</strong></a>
      </div>
    );
  }
}

