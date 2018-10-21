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
      return [
          ...state.courses,
          {
            id: action.course.id,
            title: action.course.title,
            watchHref: action.course.watchHref,
            authorId: action.course.authorId,
            length: action.course.length,
            category: action.course.category,
          }
        ]
    case CourseActionTypes.DELETE_COURSE:
      CourseApi.deleteCourse(action.index).then(result => {
        return result;
      });
      return [];
    case CourseActionTypes.UPDATE_COURSE:
      return [
        state[action.index] = {
            id: action.course.id,
            title: action.course.title,
            watchHref: action.course.watchHref,
            authorId: action.course.authorId,
            length: action.course.length,
            category: action.course.category,
          }
        ]
    default:
      return state;
  }
}
