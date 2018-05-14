import React from 'react';
import ReactDOM from 'react-dom';
import PeopleCard from './PeopleCard';
import {shallow, mount} from 'enzyme';
it('should match the snapshot', () => {
  let name='Alan';
  let planet= 'Earth';
  let species='humanish';
  let population= 1;
  let findFavorite= jest.fn();
  let id = "Person0";
  let category= "people";

  let wrapper= shallow(<PeopleCard name={name}
    planet={planet}
    species={species}
    population={population}
    findFavoritePerson={findFavorite}
    id={id}
    category={category}
  />);
  expect(wrapper).toMatchSnapshot();
});