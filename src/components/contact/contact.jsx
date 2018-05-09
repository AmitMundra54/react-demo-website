import React, { Component } from 'react';
import './contact.css';
import { FormInput } from './form.input';


export class Contact extends Component {
  render() {
    return (
      <div id="contact">
        <h1 className="contact-h1">Contact Us</h1>
        <form name="contact">
            <FormInput name="name" id="name" type="text" placeholder="Enter your name"/>
            <FormInput name="phone" id="phone" type="phone" placeholder="Enter phone number"/>
            <FormInput name="email" id="email" type="email" placeholder="Enter email address"/>
            <textarea name="message" id="message" type="text" placeholder="Write your message"/>          
            </form>
      </div>
    );
  }
}

