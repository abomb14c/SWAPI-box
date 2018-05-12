import React from 'react'
import './VehicleCard.css'

const VehicleCard = (props) => {
   const{name, model, type, passengers, findFavoriteVehicle, id} = props

    return (
        <article className="vehicle-card">
            <section className="vehicle-name-section">
                <button onClick={()=>findFavoriteVehicle(id)}>Favorite</button>
                <h1 className="vehicle-name">{name}</h1>
            </section>
            <div className="content-div">
                <p className="description-title">Model</p>
                <h3 className="description-content">{model}</h3>
            </div>
            <hr></hr>
            <div className="content-div">
                <p className="description-title">Class</p>
                <h3 className="description-content">{type}</h3>
            </div>
            <hr></hr>
            <div className="content-div">
                <p className="description-title">Passengers</p>
                <h3 className="description-content">{passengers}</h3>
            </div>
        </article>
    )
    
}

export default VehicleCard



