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
      AuthorApi.saveAuthor(action.author).then(result => {
        return [
          result
        ]
      });
      return [];
    case AuthorActionTypes.DELETE_AUTHORS:
      AuthorApi.deleteAuthor(action.index).then(result => {
        return [
            ...result
          ]
      }).catch();
      return [];
    case AuthorActionTypes.UPDATE_AUTHORS:
      return [
          ...state.filter(author => {
            if(author.id === action.author.id){
              return action.author;
            }
            return author;
          })
        ]
    default:
      return state;
  }
}
