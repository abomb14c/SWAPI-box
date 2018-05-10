import React from 'react'

const PeopleCard = (props) => {
   const{name, planet, species, population} = props
   
    // console.log(name)
    return (
        <article className="person-card">
        <h3>name: {name}</h3>
        <h3>homeworld: {planet}</h3>
        <h3>species: {species}</h3>
        <h3>population: {population}</h3>
        </article>
    )
    
}

export default PeopleCard