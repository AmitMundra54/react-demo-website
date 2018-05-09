import React from "react";
import "./header.css";
import brand from "../../assets/brand.png";

export class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const navItems = ['About Us', 'Products', 'Our Services', 'Gallery','Blog','Contact Us'];
    const item = navItems.map(item => {
      return (<li class="nav-item">
      <a class="nav-link li-item" href="#">
      {item} <span class="sr-only">(current)</span>
      </a>
  </li>)
    })
    return (
      <div id="block-wrapper">
        <div className="container" id="app_header" >
          <div className="row header">
            <div className="col-lg-2 col-md-2 col-xs-12">
              <a>
                <img src={brand} />
              </a>
            </div>
            <div className="col-lg-6 col-md-6 col-xs-12 list">
              <nav class="navbar navbar-expand-lg nav">
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
                 <ul class="nav">
                    {item}
                 </ul>
                </div>
              </nav>
              </div>             
              <div class="col-lg-4 col-md-4 col-xs-12 white top">
                <a className="btn1" value="">REQUEST A CALL</a> 
              </div>
          </div>
            <div className="company-name">
                <h2 class="text-align-left size">Liteland Australia</h2>
                <p className="p-size">
                    Signage & Led Display. Consulting, design, fabrication and installation one of several type of sign.
                </p>  
                <div className="mar30 white">
                    <a className="a-red">CONTACT US</a> 
                    <a className="a-white">READ MORE</a>  
                </div>
            </div>
            
        </div>
      </div>
    );
  }
}
