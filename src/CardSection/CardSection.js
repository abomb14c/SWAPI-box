import React from 'react'
import PeopleCard from '../PeopleCard/PeopleCard'
import PlanetCard from '../PlanetCard/PlanetCard'

const CardSection = ({people, activeCategory, planets}) => {
    let displayCards;

    if(activeCategory === "people"){
        displayCards= people.map(person => {
            return <PeopleCard {...person} />
        })
    } else if (activeCategory === "planets"){
        displayCards= planets.map(planet => {
            return <PlanetCard {...planet} />
        })
    }
   
    return(
        <section className="card-section">
            {displayCards}
        </section>
    )
}

export default CardSection