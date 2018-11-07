import React from 'react'
import * as AuthorActions from '../../src/actions/author'
import AuthorReducer from '../../src/reducers/author'

describe('Author Reducer Test', () => {
  it('should return empty list of authors', () => {
    const action = {
      type: AuthorActions.LIST_AUTHORS,
      authors: []
    }

    expect(AuthorReducer(undefined, action).authors).toEqual([])
  })

  it('should return an array of one author', () => {
    const author = {
      firstName: "firstName",
      lastName: "lastName"
    }

    const action = {
      type: AuthorActions.ADD_AUTHOR,
      author
    }

    expect(AuthorReducer(undefined, action).author).toEqual(author)
  })

  it('should return empty list of authors on deletion since none is passed', () => {
    const action = {
      type: AuthorActions.DELETE_AUTHORS,
      authors: []
    }

    expect(AuthorReducer(undefined, action).authors).toEqual([])
  })

  it('should return the updated author value', () => {
    const author = {
      id: 'dan-wahlin',
      firstName: 'Dan',
      lastName: 'Wahlin-Updated'
    }

    const action = {
      type: AuthorActions.UPDATE_AUTHORS,
      author
    }

    expect(AuthorReducer(undefined, action).author.lastName).toEqual(author.lastName)
  })

  it('should return the given author value', () => {
    const author = {
      id: 'firstName-lastName',
      firstName: 'Firstname',
      lastName: 'Lastname'
    }

    const action = {
      type: AuthorActions.GET_AUTHOR,
      author
    }

    expect(AuthorReducer(undefined, action).author).toEqual(author)
  })


  it('should return the inital state', () => {
    const action = {
      type: undefined
    }
    const initialState = {
      authors: [],
      author: {
        id: '',
        firstName: '',
        lastName: ''
      }
    };

    expect(AuthorReducer(undefined, action)).toEqual(initialState)
  })
})
