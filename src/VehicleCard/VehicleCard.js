import React from 'react';
import './VehicleCard.css';
import PropTypes from 'prop-types';

const VehicleCard = (props) => {
  const{name, model, type, passengers, findFavoriteVehicle, id, category} = props;

  return (
    <article className="vehicle-card">
      <section className="vehicle-name-section">
        <h1 className="vehicle-name">{name}</h1>
        <button onClick={()=>findFavoriteVehicle(id)} className="favorites">Favorite</button>
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
  );
    
};
VehicleCard.propTypes = {
  name: PropTypes.string,
  model: PropTypes.string,
  type: PropTypes.string,
  passengers: PropTypes.number,
  findFavoriteVehicle: PropTypes.func,
  id: PropTypes.string,
  category: PropTypes.string
};

export default VehicleCard;



