import React from 'react'
import PeopleCard from '../PeopleCard/PeopleCard'
import PlanetCard from '../PlanetCard/PlanetCard'
import VehicleCard from '../VehicleCard/VehicleCard'
import './CardSection.css'

const CardSection = ({people, activeCategory, planets, vehicles}) => {
    let displayCards;

    if(activeCategory === "is people"){
        displayCards= people.map(person => {
            return <PeopleCard {...person} />
        })
    } else if (activeCategory === "is planets"){
        displayCards= planets.map(planet => {
            return <PlanetCard {...planet} />
        })
    
    } else if(activeCategory === "is vehicles") {
        displayCards= vehicles.map(vehicle => {
            return <VehicleCard {...vehicle} />
        })
    }
   
    return(
        <section className="card-section">
            {displayCards}
        </section>
    )
}

export default CardSection