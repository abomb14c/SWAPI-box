import React from 'react';
import ReactDOM from 'react-dom';
import CardSection from './CardSection';
import PeopleCard from '../PeopleCard/PeopleCard';
import PlanetCard from '../PlanetCard/PlanetCard';
import VehicleCard from '../VehicleCard/VehicleCard';
import {shallow, mount} from 'enzyme';

describe('App', () => {
  let wrapper;
  let mockPeople = [{name:"Alan", planet:"Earth"}];
  let mockActiveCategory= '';
  let mockPlanets= [{name:"earth", climate: "slowly dying"}];
  let mockVehicles=[{name:'subaru', passangers:2}];
  let mockFavorite= jest.fn();
  let mockFavoritesArray = [{name:"Alan", planet:"Earth"}, 
    {name:"earth", climate: "slowly dying"}, 
    {name:'subaru', passangers:2}];

  beforeEach(() => {
    wrapper = shallow(<CardSection people={mockPeople}
      activeCategory={mockActiveCategory}
      planets={mockPlanets}
      vehicles={mockVehicles}
      findFavoritePerson={mockFavorite}
      findFavoriteVehicle={mockFavorite}
      findFavoritePlanet={mockFavorite}
      favoritesArray={mockFavoritesArray}
    />);
  });
  
  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  });

  it('should render the people cards', () => {
    wrapper= mount(<CardSection people={mockPeople} activeCategory={'is people'} />);
        
    const peopleCard= wrapper.find("section").find("article");
    expect(peopleCard.hasClass("person-card")).toBe(true);
  });

  it('should render the planet cards', () => {
    wrapper= mount(<CardSection planets={mockPlanets} activeCategory={'is planets'} />);
        
    const planetCard= wrapper.find("section").find("article");
    expect(planetCard.hasClass("planet-card")).toBe(true);
  });

  it('should render the vehicle cards', () => {
    wrapper= mount(<CardSection vehicles={mockVehicles} activeCategory={'is vehicles'} />);
        
    const vehicleCard= wrapper.find("section").find("article");
    expect(vehicleCard.hasClass("vehicle-card")).toBe(true);
  });
});