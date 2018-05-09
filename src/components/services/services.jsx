import React, { Component } from 'react';
import './services.css';
import { Service } from './service';

export class Services extends Component {
  render() {
    return (
      <div id="service">
        <div className="container service-position">
        <div className="row">
                <h1 className="service-h1 align-left">Our Services</h1>
                <div className="row">
                    <Service title="Technical Suppport" para="Our company is able to provide peace of mind to our customers when is comes to technical support."/>
                    <Service title="Marketing Screen" para="We recognise the importance screen content when it comes to digital signage."/>
                    <Service title="Graphic Design" para="When you need a campaign to really stand out you can engage in our professional graphic designers."/>  
                    <Service title="Applications" para="When you need a campaign to really stand out you can engage in our professional graphic designers."/>                   
                </div>
                </div>
        </div>
      </div>
    );
  }
}

