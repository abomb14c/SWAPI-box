import React from 'react';
import './PlanetCard.css';
import PropTypes from 'prop-types';

const PlanetCard = (props) => {
  const{name, terrain, population, climate, residents, findFavoritePlanet, id, category} = props;

  return (
    <article className="planet-card">
      <section className="planet-name-section">
        <h1 className="planet-name">{name}</h1>
        <button onClick={()=> findFavoritePlanet(id)} className="favorites">Favorite</button>
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
  );
     
};

PlanetCard.propTypes = {
  name: PropTypes.string,
  terrain: PropTypes.string,
  population: PropTypes.number,
  climate: PropTypes.string,
  residents: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array
  ]),
  findFavoritePlanet: PropTypes.func,
  id: PropTypes.string,
  category: PropTypes.string
};
 
export default PlanetCard;
