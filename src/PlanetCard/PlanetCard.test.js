import React from 'react';
import ReactDOM from 'react-dom';
import PlanetCard from './PlanetCard';
import {shallow, mount} from 'enzyme';

it('should match the snapshot', () => {
  let name='Earth';
  let terrain='hills';
  let population= 123;
  let climate= 'shitty';
  let findFavorite= jest.fn();
  let id = "Planet0";
  let residents= "people, animals, bears";
  let category="planets";

  let wrapper= shallow(<PlanetCard name={name}
    terrain={terrain}
    population={population}
    climate={climate}
    findFavoritePlanet={findFavorite}
    id={id}
    category={category}
    residents={residents}
  />);
  expect(wrapper).toMatchSnapshot();
});