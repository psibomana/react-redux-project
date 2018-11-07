import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import { createMemoryHistory } from 'history'
import AuthorForm from '../../../src/components/author/authorForm'

describe('Author Form Test', () => {
  let wrapper, author, mockOnChange, mockOnSave, mockOnDelete, history;

  beforeEach(() => {
    author = {
      id: "firstName-lastName",
      firstName: "firstName",
      lastName: "lastName"
    }

    mockOnChange = jest.fn();
    mockOnSave = jest.fn();
    mockOnDelete = jest.fn();
    history = createMemoryHistory('/authors')
    wrapper = shallow(
      <AuthorForm
        author={author}
        onChange={mockOnChange}
        onSave={mockOnSave}
        onDelete={mockOnDelete}
        history={history}
        />
    )
  })

  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })

  it('should call onChange handler from first name', () => {

    const event = {
      target: { value: 'updated-firstname' }
    };

    wrapper.find('#firstName').simulate('change', event);
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });

  it('should call onChange handler from last name', () => {

    const event = {
      target: { value: 'updated-lastname' }
    };

    wrapper.find('#lastName').simulate('change', event);
    expect(mockOnChange.mock.calls.length).toEqual(1);
  });
})
