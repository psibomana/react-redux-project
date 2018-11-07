import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';
import toJson from 'enzyme-to-json';
import AboutPage from '../../src/containers/aboutPage';

describe('The About Page', () => {
  it('should render as expected', () => {
    const aboutPage = shallow(<AboutPage />);

    expect(toJson(aboutPage)).toMatchSnapshot();
  })
});
