import React from 'react'
import PeopleCard from '../Card/PeopleCard'


const CardSection = ({people}) => {
       const displayPeople= people.map(person => {
           return <PeopleCard {...person} />
       })
   
    
    return(
        <section className="card-section">
            {displayPeople}
        </section>
    )
}

export default CardSection