import * as AuthorActionTypes from '../actionTypes/author';
import AuthorApi from '../api/mockAuthorApi';

const initialState = [];

export default function AuthorReducer(state=initialState, action) {
  switch(action.type) {
    case AuthorActionTypes.LIST_AUTHORS:
      return [
          ...action.authors
        ]
    case AuthorActionTypes.ADD_AUTHOR:
      return [
          ...state.authors,
          {
            id: action.autor.id,
            firstName: action.author.firstName,
            lastName: action.author.lastName,
          }
        ]
    case AuthorActionTypes.DELETE_AUTHORS:
      AuthorApi.deleteAuthor(action.index).then(result => {
        return [
            ...result
          ]
      });
      break;
    case AuthorActionTypes.UPDATE_AUTHORS:
      return state[action.index] = {
            id: action.author.id,
            firstName: action.author.firstName,
            lastName: action.author.lastName
          }
    default:
      return state;
  }
}
