import React from 'react'

const PlanetCard = (props) => {
    const{name, terrain, population, climate, residents} = props

     return (
         <article className="planet-card">
            <section className="name-section">
                <h1 className="planet-name">{name}</h1>
            </section>
            <div>
                <p className="description-title">
                <h3>terrain: {terrain}</h3>
            </div>
         <h3>population: {population}</h3>
         <h3>climate: {climate}</h3>
         <h3>residents: {residents}</h3>
         </article>
     )
     
 }
 
 export default PlanetCard


//  <article className="person-card">
//  <section className="name-section">
//      <h1 className="person-name">{name}</h1>
//  </section>
//  <div className="content-div">
//      <p className="description-title">Origin</p>
//      <h3 className="description-content">{planet}</h3>
//  </div>
//  <hr></hr>
//  <div className="content-div">
//      <p className="description-title">Species</p>
//      <h3 className="description-content">{species}</h3>
//  </div>
//  <hr></hr>
//  <div className="content-div">
//      <p className="description-title">Population</p>
//      <h3 className="description-content">{population}</h3>
//  </div>
// </article>
// )