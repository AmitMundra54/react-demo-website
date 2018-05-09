import React, { Component } from 'react';

export class NavItem extends Component {
  render() {
      const navItems = this.props.navItems.map( item => {
        <li class="nav-item active">
            <a class="nav-link li-item" href="#">
            {item} <span class="sr-only">(current)</span>
            </a>
        </li>
      })
    return (
     <div>
        <ul>
            {navItems}
        </ul>
     </div>
    );
  }
}

