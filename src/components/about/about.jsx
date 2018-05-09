import React, { Component } from 'react';
import './about.css';

export class About extends Component {
  render() {
    return (
      <div id="about">
      <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6 col-xs-12 flex-column">
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 flex-column">
                <h1 className="size align-left">About Liteland Australia</h1>
                <p className="align-left p-align">
                Our team consists of highly motivated and skilled specialists who know how to deal with any issue that you may come across. This creates a basis for lasting relationships with our clients built on trust and mutual understanding. We are devoted to creating unique and innovative solutions along with the high-quality supporting services.</p>
                <div className="align-left" style={{marginTop : "40px", color: 'white'}}>
                    <a className="contact-us">
                        CONTACT US
                    </a>
                </div>
            </div>
        </div>
        </div>
      </div>
    );
  }
}

