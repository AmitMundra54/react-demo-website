import React, { Component } from 'react';
import './progress.css';
export class Progress extends Component {
  render() {
    return (
      <div id="progress">
        <div class="container" >
                <p className="result">
                    Our Results in Numbers
                </p>
                <div class="row">
                    <div className="col-lg-4 col-md-4 col-xs-12 flex-column">
                        <div className="profit left-align">
                            <p className="font-18">Increase profits for</p>
                            <p className="font-18">our customers by</p>
                            <p className="font-40">75%</p>                  
                        </div>
                    </div>
                    <div className=" col-lg-4 col-md-4 col-xs-12 flex-column">
                        <div className="profit left-align">
                            <p className="font-18">Expand market reach</p>
                            <p className="font-18">of our cleints for                    
                            </p>
                            <p className="font-40">18%</p>                  
                        </div>
                    </div>
                    <div className=" col-lg-4 col-md-4 col-xs-12 flex-column">
                        <div className="profit left-align">
                            <p className="font-18">
                            Improve customer satisfaction</p>
                            <p className="font-18">of our users for                  
                            </p>
                            <p className="font-40">89%</p>                  
                        </div>
                    </div>
                </div>
                <div className="white position1">
                    <a className="project">ABOUT OUR PROJECT</a>
                </div>
            </div>
      </div>
    );
  }
}

