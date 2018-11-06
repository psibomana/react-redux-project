import React from 'react'
import * as AuthorActions from '../../src/actions/author'
import AuthorReducer from '../../src/reducers/author'

describe('Author Reducer Test', () => {
  it('should return empty list of authors', () => {

    const action = {
        type: AuthorActions.LIST_AUTHORS,
        authors: []
      }

      expect(AuthorReducer(undefined, action)).toEqual([])

  })
})
