import React from 'react';
import './PeopleCard.css';
import propTypes from 'prop-types';

const PeopleCard = (props) => {
  const{name, planet, species, population, findFavoritePerson, id, category} = props;
 
  return (
    <article className="person-card">
      <section className="name-section">
        <h1 className="person-name">{name}</h1>
        <button onClick={()=>findFavoritePerson(id)} className="favorites">Favorite</button>
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
  );
};

PeopleCard.propTypes = {
  name: propTypes.string,
  planet: propTypes.string,
  species: propTypes.string,
  population: propTypes.number,
  findFavoritePerson: propTypes.func,
  id: propTypes.string,
  category: propTypes.string
};
export default PeopleCard;