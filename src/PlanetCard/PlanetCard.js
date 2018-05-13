import React from 'react'
import './PlanetCard.css'

const PlanetCard = (props) => {
    const{name, terrain, population, climate, residents, findFavoritePlanet, id} = props

     return (
         <article className="planet-card">
            <section className="planet-name-section">
            <button onClick={()=> findFavoritePlanet(id)}>Favorite</button>
                <h1 className="planet-name">{name}</h1>
            </section>
            <div className="content-div">
                <p className="description-title">Terrain</p>
                <h3 className="description-content">{terrain}</h3>
            </div>
            <hr></hr>
            <div className="content-div">
                <p className="description-title">Population</p>
                <h3 className="description-content">{population}</h3>
            </div>
            <hr></hr>
            <div className="content-div">
                <p className="description-title">Climate</p>
                <h3 className="description-content">{climate}</h3>
            </div>
            <hr></hr>
            <div className="content-div">
                <p className="description-title">Residents</p>
                <h3 className="description-content residents">{residents}</h3>
            </div>
         </article>
     )
     
 }
 
 export default PlanetCard
