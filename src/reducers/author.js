import {
  LIST_AUTHORS,
  ADD_AUTHOR,
  UPDATE_AUTHORS,
  DELETE_AUTHORS
} from '../actions/author';
import AuthorApi from '../api/mockAuthorApi';

const initialState = [];

export default function AuthorReducer(state=initialState, action) {
  switch(action.type) {
    case LIST_AUTHORS:
      return [
          ...action.authors
        ]
    case ADD_AUTHOR:
      AuthorApi.saveAuthor(action.author).then(result => {
        return [
          result
        ]
      });
      return [];
    case DELETE_AUTHORS:
      AuthorApi.deleteAuthor(action.index).then(result => {
        return [
            ...result
          ]
      }).catch();
      return [];
    case UPDATE_AUTHORS:
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
