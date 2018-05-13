import React from 'react'
import ReactDOM from 'react-dom';
import VehicleCard from './VehicleCard'
import {shallow, mount} from 'enzyme';

it('should match the snapshot', () => {
    let name='Roxanne'
    let model='subaru'
    let type= "bitchin"
    let findFavorite= jest.fn()
    let id = "Vehicle0"
    let category="vehicles"

    let wrapper= shallow(<VehicleCard name={name}
    model={model}
    type={type}
    findFavoriteVehicle={findFavorite}
    id={id}
    category={category}
    />)
    expect(wrapper).toMatchSnapshot();
  })