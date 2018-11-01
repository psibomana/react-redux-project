import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import AuthorPage from '../../src/containers/authorPage'

const mockStore = configureStore();

const initialState = {
  AuthorReducer: [
    {
      id: 'cory-house',
      firstName: 'Cory',
      lastName: 'House'
    },
    {
      id: 'scott-allen',
      firstName: 'Scott',
      lastName: 'Allen'
    },
    {
      id: 'dan-wahlin',
      firstName: 'Dan',
      lastName: 'Wahlin'
    }
  ]
};

const store = mockStore(initialState);

describe('Author Page', () => {
  it('should render as expected', () => {
    const wrapper = shallow(<AuthorPage store={store} />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
});
