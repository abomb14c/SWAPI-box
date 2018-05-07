import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ButtonContainer from './ButtonContainer/ButtonContainer.js'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }
  
  
  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWAPI-Box</h1>
        </header>
        <ButtonContainer />
      </div>
    );
  }
}

export default App;
