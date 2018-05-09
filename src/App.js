import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Header } from './components/header/header';
import { Progress } from './components/progress/progress';
import { About } from './components/about/about';
import { Products } from './components/products/products';
import { Sale } from './components/sales/sales';
import { Services } from './components/services/services';
import { Footer } from './components/footer/footer';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Header/>
          <Progress/>
          <About/>
          <Products/>
          <Sale/>
          <Services/>
          <Footer/>
      </div>
    );
  }
}

export default App;
