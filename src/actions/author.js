import * as AuthorActionTypes from '../actionTypes/author';

export const listAuthors = authors => {
  return {
    type: AuthorActionTypes.LIST_AUTHORS,
    authors: authors
  }
}

export const deleteAuthor = index => {
  return {
    type: AuthorActionTypes.DELETE_AUTHORS,
    index
  }
}

export const addAuthor = author => {
  return {
    type: AuthorActionTypes.ADD_AUTHOR,
    author
  }
}

export const updateAuthor = author => {
  return {
    type: AuthorActionTypes.UPDATE_AUTHORS,
    author
  }
}
