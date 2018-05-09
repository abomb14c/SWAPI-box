import React, { Component } from 'react';
import './App.css';
import ButtonContainer from './ButtonContainer/ButtonContainer.js'
import getCrawlText from './utils/helper.js'
import { CrawlText } from './CrawlText/CrawlText'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      crawlData: []

    }
  }
  
  componentDidMount() {
    const url = 'https://swapi.co/api/films/'
    fetch(url)
    .then(response => response.json())
    .then(data => {
     const crawlData= getCrawlText(data)
      this.setState({crawlData})
    })
    // .then(crawlData => this.setState({crawlData}))
  
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWAPI-Box</h1>
        </header>
        <ButtonContainer />
        {this.state.crawlData &&
          <CrawlText data={this.state.crawlData} />
        }
      </div>
    );
  }
}

export default App;
