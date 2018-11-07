import React from 'react'
import { createStore } from 'redux'
import RootReducer from '../../src/reducers/rootReducer'

describe('Root Reducer Tests', () => {
  let store;

  beforeAll(() => {
    store = createStore(RootReducer);
  })

  it('should have an AuthorReducer instance', () => {
    expect(store.getState()).toHaveProperty('AuthorReducer')
  })

  it('should have an CourseReducer instance', () => {
    expect(store.getState()).toHaveProperty('CourseReducer')
  })
})
