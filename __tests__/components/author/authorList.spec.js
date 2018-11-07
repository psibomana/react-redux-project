import React from 'react'
import renderer from 'react-test-renderer'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import AuthorList from '../../../src/components/author/authorList'

describe('Author List Test', () => {
  let wrapper, authors;
  beforeEach(() => {
    authors = [
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

    wrapper = shallow(
      <AuthorList authors={authors}/>
    )
  })
  it('should render as expected', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  })
})
