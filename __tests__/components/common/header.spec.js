import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import Header from '../../../src/components/common/header';

describe('The Header Component', () => {
  it('should render as expected', () => {
    const header = shallow(<Header />);
    expect(toJson(header)).toMatchSnapshot();
  })
});
