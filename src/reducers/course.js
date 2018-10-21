import * as CourseActionTypes from '../actionTypes/course';

let initialState = [];

export default function CourseReducer(state=initialState, action) {
  switch(action.type) {
    case CourseActionTypes.LIST_COURSES:
        return [
          ...state,
          ...action.courses
        ]
    case CourseActionTypes.ADD_COURSE:
      return [
        ...state,
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
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1)
      ]
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
