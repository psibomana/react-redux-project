import {
  LIST_AUTHORS,
  ADD_AUTHOR,
  UPDATE_AUTHORS,
  DELETE_AUTHORS
} from '../actions/author';

const initialState = [];

export default function AuthorReducer(state=initialState, action) {
  switch(action.type) {
    case LIST_AUTHORS:
      return [
          ...action.authors
        ]
    case ADD_AUTHOR:
        return [
          action.author
        ]
    case DELETE_AUTHORS:
        return [
            ...action.authors
          ]
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
