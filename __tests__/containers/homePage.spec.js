import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import HomePage from '../../src/containers/homePage';

describe('The Home Page', () => {
  it('should render as expected', () => {
    const homePage = shallow(<HomePage />);
    expect(toJson(homePage)).toMatchSnapshot();
  })
});
