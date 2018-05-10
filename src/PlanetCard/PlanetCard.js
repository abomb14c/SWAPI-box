import React from 'react'

const PlanetCard = (props) => {
    const{name, terrain, population, climate, residents} = props

     return (
         <article className="person-card">
         <h3>name: {name}</h3>
         <h3>terrain: {terrain}</h3>
         <h3>population: {population}</h3>
         <h3>climate: {climate}</h3>
         <h3>residents: {residents}</h3>
         </article>
     )
     
 }
 
 export default PlanetCard