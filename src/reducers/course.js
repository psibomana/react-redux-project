import {
  LIST_COURSES,
  ADD_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE
} from '../actions/course';

const initialState = {
  courses: [],
  course: {
    id: "",
    title: "",
    watchHref: "",
    authorId: "",
    length: "",
    category: ""
  }
};

export default function CourseReducer(state=initialState, action) {
  switch(action.type) {
    case LIST_COURSES:
      return Object.assign({}, state, {
        courses: action.courses
      })
    case ADD_COURSE:
      return Object.assign({}, state, {
        course: action.course
      })
    case DELETE_COURSE:
      return Object.assign({}, state, {
        courses : action.courses
      })
    case UPDATE_COURSE:
      return Object.assign({}, state, {
        course: action.course
      })
    default:
      return state;
  }
}
