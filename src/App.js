import React, { Component } from 'react';
import './App.css';
import {getCrawlText} from './utils/helper.js'
import { CrawlText } from './CrawlText/CrawlText'
import {getPeopleData, getPlanets, getVehicles} from './utils/ApiCalls'
import CardSection from './CardSection/CardSection'

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      crawlData: [],
      cleanPeople: [],
      cleanPlanets: [],
      cleanVehicles: [],
      activeCategory: "",
      favoritesArray: []
    }
  }
  
  setPeopleData = async () => {
    const cleanPeople = await getPeopleData()
    this.setState({cleanPeople,
      crawlData: [],
      activeCategory: "is people",
      cleanPlanets: [],
      cleanVehicles: []
    })
  }

  findFavoritePerson = (id) => {
    const favoritePerson = this.state.cleanPeople.find(person => person.id === id)
    this.setState({
      favoritesArray:[...this.state.favoritesArray, favoritePerson]
    })
  }

  findFavoritePlanet = (id) => {
    const favoritePlanet = this.state.cleanPlanets.find(planet => planet.id === id)
    this.setState({
      favoritesArray:[...this.state.favoritesArray, favoritePlanet]
    })
  }

  findFavoriteVehicle = (id) => {
    const favoriteVehicle = this.state.cleanVehicles.find(vehicle => vehicle.id === id)
    this.setState({
      favoritesArray:[...this.state.favoritesArray, favoriteVehicle]
    })
  }

  setPlanetData = async () => {
    const cleanPlanets = await getPlanets()
    this.setState({cleanPlanets,
      crawlData:[],
      activeCategory:"is planets",
      cleanPeople: [],
      cleanVehicles: []
    })
  }

  setVehicleData = async () => {
    const cleanVehicles = await getVehicles()
    this.setState({cleanVehicles,
      crawlData:[],
      activeCategory: "is vehicles",
      cleanPeople: [],
      cleanPlanets: []
    })
  }

  setFavorites = () => {
    this.setState({
      activeCategory: "is favorites"
    })
  }

  componentDidMount() {
    const url = 'https://swapi.co/api/films/'
    fetch(url)
    .then(response => response.json())
    .then(data => {
     const crawlData= getCrawlText(data)
      this.setState({crawlData})
    })
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">SWAPI-Box</h1>
        </header>
        <div className="button-container">
            <button className="data-button" onClick={this.setPeopleData}>people</button>
            <button className="data-button" onClick={this.setPlanetData}>planets</button>
            <button className="data-button" onClick={this.setVehicleData}>vehicles</button>
            <button className="data-button" onClick={this.setFavorites}>Favorites</button>
        </div>
        {this.state.crawlData &&
          <CrawlText data={this.state.crawlData} />
        }

        {this.state.activeCategory.includes("is")  &&

        <CardSection activeCategory={this.state.activeCategory} 
        people={this.state.cleanPeople}
        planets={this.state.cleanPlanets}
        vehicles={this.state.cleanVehicles}
        findFavoritePerson={this.findFavoritePerson}
        findFavoritePlanet={this.findFavoritePlanet}
        findFavoriteVehicle={this.findFavoriteVehicle}
        favoritesArray={this.state.favoritesArray}

        />
      }
      </div>
    );
  }
}

export default App;
