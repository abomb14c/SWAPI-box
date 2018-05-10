import React from 'react'

const VehicleCard = (props) => {
   const{name, model, type, passengers} = props

    return (
        <article className="person-card">
        <h3>name: {name}</h3>
        <h3>model: {model}</h3>
        <h3>class: {type}</h3>
        <h3>passengers: {passengers}</h3>
        </article>
    )
    
}

export default VehicleCard