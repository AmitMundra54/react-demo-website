import React, { Component } from 'react';
import './footer.css';
import logo from '../../assets/brand.png';


export class Footer extends Component {
  render() {
    return (
      <div id="footer">
      <div className="container contain">
        <div className="row">
            <div className="col-md-2 col-lg-2 col-sm-12">
                <a><img src={logo}></img></a>
            </div>
            <div className="col-lg-8 col-md-8 col-xs-12 list">
            <nav class="navbar navbar-expand-lg nav" style={{float: 'right'}}>
              <button
                class="navbar-toggler"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span class="navbar-toggler-icon" />
              </button>

              <div
                class="collapse navbar-collapse"
                id="navbarSupportedContent"
              >
                <ul class="navbar-nav">
                  <li class="nav-item active">
                    <a class="nav-link li-item" href="#">
                      About us <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link li-item" href="#">
                      Products <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link li-item" href="#">
                      Our Services <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link li-item" href="#">
                      Gallery <span class="sr-only">(current)</span>
                    </a>
                  </li>
                  <li class="nav-item active">
                    <a class="nav-link li-item" href="#">
                      Blog <span class="sr-only">(current)</span>
                    </a>
                  </li>
                    <li class="nav-item active">
                      <a class="nav-link li-item" href="#">
                        Contact us <span class="sr-only">(current)</span>
                      </a>
                    </li>
                </ul>
              </div>
            </nav>
          </div>
          <hr className="hr"/>        
            <div className="white">
                <h1><span>Created by: <b>Amit Mundra</b></span></h1>
            </div>          
        </div>
        </div>

      </div>
    );
  }
}
