import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { createMemoryHistory } from 'history'
import CourseForm from '../../../src/components/course/courseForm'

describe('Course Form Test', () => {
  let wrapper, course, mockOnChange, mockOnSave, mockOnDelete, history;

  beforeEach(() => {
    course = {
        id: "clean-code",
        title: "Clean Code: Writing Code for Humans",
        watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
        authorId: "cory-house",
        length: "3:10",
        category: "Software Practices"
      }

    mockOnChange = jest.fn();
    mockOnSave = jest.fn();
    mockOnDelete = jest.fn();
    history = createMemoryHistory('/authors')

    wrapper = shallow(
      <CourseForm
        course={course}
        errors={{}}
        allAuthors={[]}
        onChange={mockOnChange}
        onSave={mockOnSave}
        onDelete={mockOnDelete}
        saving={false}
        history={history}
        />
    )
  })

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('should call onChange handler from title', () => {

    const event = {
      target: { value: 'updated-title' }
    };

    wrapper.find('#title').simulate('change', event);
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });

  it('should call onChange handler from author input', () => {

    const event = {
      target: { value: 'updated-author' }
    };

    wrapper.find('#clean-code').simulate('change', event);
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });

  it('should call onChange handler from category', () => {

    const event = {
      target: { value: 'updated-category' }
    };

    wrapper.find('#category').simulate('change', event);
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });
})
