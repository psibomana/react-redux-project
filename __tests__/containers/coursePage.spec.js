import React from 'react';
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import configureStore from 'redux-mock-store'
import CoursePage from '../../src/containers/coursePage'

describe('Course Page', () => {
  let store, wrapper, initialState;

  beforeEach(() => {
    const mockStore = configureStore();
    initialState = {
      CourseReducer: {
        courses: [
          {
            id: "react-flux-building-applications",
            title: "Building Applications in React and Flux",
            watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
            authorId: "cory-house",
            length: "5:08",
            category: "JavaScript"
          },
          {
            id: "clean-code",
            title: "Clean Code: Writing Code for Humans",
            watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
            authorId: "cory-house",
            length: "3:10",
            category: "Software Practices"
          }
        ]
      }
    };
    store = mockStore(initialState);
    wrapper = shallow(<CoursePage store={store} />);
  })

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('should map state to props', () => {
    expect(wrapper.props().courses.length)
      .toEqual(initialState.CourseReducer.courses.length)
  })
});
