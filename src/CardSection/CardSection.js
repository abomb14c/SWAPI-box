import React from 'react'
import PeopleCard from '../PeopleCard/PeopleCard'
import PlanetCard from '../PlanetCard/PlanetCard'
import VehicleCard from '../VehicleCard/VehicleCard'
import './CardSection.css'

const CardSection = ({people, activeCategory, planets, vehicles, findFavoritePerson, findFavoritePlanet, findFavoriteVehicle}) => {
    let displayCards;

    if(activeCategory === "is people"){
        displayCards= people.map(person => {
            return <PeopleCard {...person} findFavoritePerson={findFavoritePerson}/>
        })
    } else if (activeCategory === "is planets"){
        displayCards= planets.map(planet => {
            return <PlanetCard {...planet} findFavoritePlanet={findFavoritePlanet}/>
        })
    
    } else if(activeCategory === "is vehicles") {
        displayCards= vehicles.map(vehicle => {
            return <VehicleCard {...vehicle} findFavoriteVehicle={findFavoriteVehicle} />
        })
    }
   
    return(
        <section className="card-section">
            {displayCards}
        </section>
    )
}

export default CardSection