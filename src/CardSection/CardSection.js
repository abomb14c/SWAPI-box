import React from 'react';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import './CardSection.css';
import propTypes from 'prop-types';

const CardSection = ({people, activeCategory, planets, vehicles, findFavoritePerson, findFavoritePlanet, findFavoriteVehicle, favoritesArray}) => {

  let displayCards;

  if(activeCategory === "is people"){
    displayCards= people.map(person => {
      return <PeopleCard {...person} findFavoritePerson={findFavoritePerson} />;
    });
  } else if (activeCategory === "is planets"){
    displayCards= planets.map(planet => {
      return <PlanetCard {...planet} findFavoritePlanet={findFavoritePlanet} />;
    });
    
  } else if(activeCategory === "is vehicles") {
    displayCards= vehicles.map(vehicle => {
      return <VehicleCard {...vehicle} findFavoriteVehicle={findFavoriteVehicle} />;
    });
  } else if(activeCategory === "is favorites"){
    displayCards= favoritesArray.map(favorite => {
      if(favorite.category === "people"){
        return <PeopleCard {...favorite} findFavoritePerson={findFavoritePerson}/>;
      }else if(favorite.category === "planets"){
        return <PlanetCard {...favorite} findFavoritePlanet={findFavoritePlanet}/>;
      }else if(favorite.category === "vehicles"){
        return <VehicleCard {...favorite} findFavoriteVehicle={findFavoriteVehicle} />;
      }
    });
  }
   
  return(
    <section className="card-section">
      {displayCards}
    </section>
  );
};

CardSection.propTypes = {
  people: propTypes.oneOfType([
    propTypes.object,
    propTypes.array
  ]),
  activeCategory: propTypes.string,
  planets: propTypes.oneOfType([
    propTypes.object,
    propTypes.array
  ]),
  vehicles: propTypes.oneOfType([
    propTypes.object,
    propTypes.array
  ]),
  findFavoritePerson: propTypes.func,
  findFavoritePlanet: propTypes.func,
  findFavoriteVehicle: propTypes.func,
  favoritesArray: propTypes.array
};
export default CardSection;