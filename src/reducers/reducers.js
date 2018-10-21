import { combineReducers  } from 'redux';
import AuthorReducer from './author';
import CourseReducer from './course';

export default combineReducers({
  AuthorReducer,
  CourseReducer
})
