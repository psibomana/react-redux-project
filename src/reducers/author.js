import {
  LIST_AUTHORS,
  ADD_AUTHOR,
  UPDATE_AUTHORS,
  DELETE_AUTHORS,
  GET_AUTHOR
} from '../actions/author';

const initialState = {
  authors: [],
  author: {
    id: '',
    firstName: '',
    lastName: ''
  }
};

export default function AuthorReducer(state=initialState, action) {
  switch(action.type) {
    case LIST_AUTHORS:
      return Object.assign({}, state, {
        authors: action.authors,
      })
    case ADD_AUTHOR:
      return Object.assign({}, state, {
        author: action.author
      })
    case DELETE_AUTHORS:
      return Object.assign({}, state, {
        authors: action.authors
      })
    case UPDATE_AUTHORS:
      return Object.assign({}, state, {
        author: action.author
      })
    case GET_AUTHOR:
      return Object.assign({}, state, {
        author: action.author
      })
    default:
      return state;
  }
}
