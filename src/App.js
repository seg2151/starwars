import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
//import Card from './Card';
import Categories from './Categories';

class App extends Component {
  constructor () {
    super()
    this.state={
      categories:[],
      items:[]
    }
  }

  render() {
    return (
      <Categories/>
    );
  }
}

export default App;
