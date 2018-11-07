import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import AuthorPage from '../../src/containers/authorPage'

describe('Author Page', () => {
  let store, wrapper, initialState;
  beforeEach(() => {
    const mockStore = configureStore();
    initialState = {
      AuthorReducer: {
        authors: [
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
      }
    };
    store = mockStore(initialState);
    wrapper = shallow(<AuthorPage store={store} />);
  })

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('should map state to props', () => {
    expect(wrapper.props().authors.length)
      .toEqual(initialState.AuthorReducer.authors.length)
  })
});
