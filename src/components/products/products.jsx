import React, { Component } from 'react';
import { Product } from './product';
import first  from '../../assets/first.jpeg';
import './products.css'


export class Products extends Component {
  render() {
    return (
      <div className="container" id="products">
      <h1 style={{textAlign: 'center', fontSize: '3.5rem'}} className="margin" >Our Products</h1>
        <div className="row margin">
            <Product src={first} title="Led Display" para="Multipurpose assistance for online stores and offline retail businesses."/>
            <Product src={first} title="Rental" para="Developing marketing and business strategy to help company grow."/>
            <Product src={first} title="Led letters" para="Building brand awareness for micro and small businesses."/>
            <Product src={first} title="Print and Design" para="Aftersales support in marketing, sales, and staff training."/>
        </div>
        <div className="row margin">
          <Product src={first} title="Car wrapping" para="Wrapping your car with custom prints."/>
          <Product src={first} title="Sticker" para="Printing custom and trendy stickers for you."/>
          <Product src={first} title="Laser cutting" para="Doing things with a professional laser cutting."/>
          <Product src={first} title="Business card" para="Creating brand business cards for you or your company."/>
        </div>
      </div>
    );
  }
}

