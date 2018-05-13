import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow, mount} from 'enzyme';
import * as ApiCalls from './utils/ApiCalls';
import * as mockData from "./utils/mockData";


describe('App', () => {
  let wrapper;
  let getPeopleData;


  beforeEach(() => {
    wrapper = shallow(<App />, {disableLifecycleMethods: true});
  });

  it('should match the snapshot', () => {
    expect(wrapper).toMatchSnapshot();
  })
  it('should have an initial state', () => {
    expect(wrapper.state().crawlData).toEqual([]);
    expect(wrapper.state().cleanPeople).toEqual([]);
    expect(wrapper.state().cleanPlanets).toEqual([]);
    expect(wrapper.state().cleanVehicles).toEqual([]);
    expect(wrapper.state().activeCategory).toBe("");
    expect(wrapper.state().favoritesArray).toEqual([]);
  })
describe('setPeopleData', () => {
  
  it('should call getPeople data', async () => {
    ApiCalls.getPeopleData= jest.fn().mockReturnValue(mockData.fetchedPeopleData);
    
    await wrapper.instance().setPeopleData()
    
    expect(ApiCalls.getPeopleData).toHaveBeenCalled()
  })
  
  it('should set state for people', async() => {
    const expected = {
      activeCategory: "is people",
      id:`people0`,
      name: "Luke",
      planet: "Tattoine",
      population: 20000,
      species: "human"
    }
    
    ApiCalls.getPeopleData= jest.fn().mockReturnValue(expected);
    await wrapper.instance().setPeopleData()
    
    expect(wrapper.instance().state.cleanPeople).toEqual(expected)
  })
})
;
describe('setPlanetData', () => {
  it('should call getPlanets', async () => {
    ApiCalls.getPlanets= jest.fn().mockReturnValue(mockData.fetchedPlanetData);
    
    await wrapper.instance().setPlanetData()
    
    expect(ApiCalls.getPlanets).toHaveBeenCalled()
  })
  it('should set state for planets', async() => {
    const expected = {
      activeCategory: "is planets",
      id:`planet0`,
      name: "Tattoine",
      terrain: "grassy, bro",
      climate: "warm af",
      residents: 40000
    }
    
    ApiCalls.getPlanets= jest.fn().mockReturnValue(expected);
    await wrapper.instance().setPlanetData()
    expect(wrapper.instance().state.cleanPlanets).toEqual(expected)
  })
});

  describe('setVehicleData', () => {
    it('should call getVehicles', async () => {
      ApiCalls.getVehicles= jest.fn().mockReturnValue(mockData.fetchedVehicles);
      
      await wrapper.instance().setVehicleData()
      
      expect(ApiCalls.getVehicles).toHaveBeenCalled()
    })
    it('should set state for vehicles', async() => {
      const expected = {
        activeCategory: "is vehicles",
        id:`vehicle0`,
        name: "Crawler",
        model: "S Class",
        type: "Pickup",
        passengers: 40000
      }
      
      ApiCalls.getVehicles= jest.fn().mockReturnValue(expected);
      await wrapper.instance().setVehicleData()
      expect(wrapper.instance().state.cleanVehicles).toEqual(expected)
    })
    
  });

  describe('find methods', () => {
    
    it('should find favorite person', () => {
      wrapper.setState({ cleanPeople: [{ id: 'Person0' }] })
      const expected = [{ id: 'Person0' }];

      wrapper.instance().findFavoritePerson('Person0');

      expect(wrapper.state().favoritesArray).toEqual(expected);
    });

    it('should find favorite planet', () => {
      wrapper.setState({ cleanPlanets: [{ id: 'Planet0' }] })
      const expected = [{ id: 'Planet0' }];

      wrapper.instance().findFavoritePlanet('Planet0');

      expect(wrapper.state().favoritesArray).toEqual(expected);
    });
    it('should find favorite vehicles', () => {
      wrapper.setState({ cleanVehicles: [{ id: 'Vehicle0' }] })
      const expected = [{ id: 'Vehicle0' }];

      wrapper.instance().findFavoriteVehicle('Vehicle0');

      expect(wrapper.state().favoritesArray).toEqual(expected);
    });
   
    });
  });



