import {
  LIST_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE
} from '../actions/course';
import CourseApi from '../api/mockCourseApi';

const initialState = [];

export default function CourseReducer(state=initialState, action) {
  switch(action.type) {
    case LIST_COURSES:
      return [
          ...action.courses
        ]
    case ADD_COURSE:
      CourseApi.saveCourse(action.course).then(result => {
        return [result];
      });
      return [];
    case DELETE_COURSE:
      CourseApi.deleteCourse(action.index).then(result => {
        return result;
      });
      return [];
    case UPDATE_COURSE:
      return [
        ...state.filter(course => {
          if(course.id === action.course.id){
            return action.course;
          }
          return course;
        })
      ]
    default:
      return state;
  }
}
