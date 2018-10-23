import * as CourseActionTypes from '../actionTypes/course';
import CourseApi from '../api/mockCourseApi';

const initialState = [];

export default function CourseReducer(state=initialState, action) {
  switch(action.type) {
    case CourseActionTypes.LIST_COURSES:
      return [
          ...action.courses
        ]
    case CourseActionTypes.ADD_COURSE:
      CourseApi.saveCourse(action.course).then(result => {
        return [result];
      });
      return [];
    case CourseActionTypes.DELETE_COURSE:
      CourseApi.deleteCourse(action.index).then(result => {
        return result;
      });
      return [];
    case CourseActionTypes.UPDATE_COURSE:
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
