import React from 'react'
import PeopleCard from '../PeopleCard/PeopleCard'
import PlanetCard from '../PlanetCard/PlanetCard'
import VehicleCard from '../VehicleCard/VehicleCard'

const CardSection = ({people, activeCategory, planets, vehicles}) => {
    let displayCards;

    if(activeCategory === "people"){
        displayCards= people.map(person => {
            return <PeopleCard {...person} />
        })
    } else if (activeCategory === "planets"){
        displayCards= planets.map(planet => {
            return <PlanetCard {...planet} />
        })
    } else if(activeCategory === "vehicles") {
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