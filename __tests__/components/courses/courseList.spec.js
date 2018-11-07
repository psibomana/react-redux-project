import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import CourseList from '../../../src/components/course/courseList'

describe('Course List Test', () => {
  let wrapper, courses, addCourse, deleteCourse, updateCourse, listCourses;

  beforeEach(() => {

    addCourse = jest.fn();
    deleteCourse = jest.fn();
    updateCourse = jest.fn();
    listCourses = jest.fn();

    courses = [
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

    wrapper = shallow(
      <CourseList
        courses={courses}
        addCourse={addCourse}
        deleteCourse={deleteCourse}
        updateCourse={updateCourse}
        listCourses={listCourses}/>
    )
  })

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
