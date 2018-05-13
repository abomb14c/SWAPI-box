import React from 'react'
import './PeopleCard.css'

const PeopleCard = (props) => {
   const{name, planet, species, population, findFavoritePerson, id} = props
 
    return (
        <article className="person-card">
            <section className="name-section">
                <button onClick={()=>findFavoritePerson(id)}>Favorite</button>
                <h1 className="person-name">{name}</h1>
            </section>
            <div className="content-div">
                <p className="description-title">Origin</p>
                <h3 className="description-content">{planet}</h3>
            </div>
            <hr></hr>
            <div className="content-div">
                <p className="description-title">Species</p>
                <h3 className="description-content">{species}</h3>
            </div>
            <hr></hr>
            <div className="content-div">
                <p className="description-title">Population</p>
                <h3 className="description-content">{population}</h3>
            </div>
        </article>
    )
}

export default PeopleCard