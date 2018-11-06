import {
  LIST_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE
} from '../actions/course';

const initialState = [];

export default function CourseReducer(state=initialState, action) {
  switch(action.type) {
    case LIST_COURSES:
      return [
          ...action.courses
        ]
    case ADD_COURSE:
        return [
          action.course
        ];
    case DELETE_COURSE:
        return [
          ...action.courses
        ];
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
