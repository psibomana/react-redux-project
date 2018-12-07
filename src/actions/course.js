const LIST_COURSES = 'COURSES/LIST_COURSES';
const ADD_COURSE = 'COURSES/ADD_COURSE';
const LOAD_COURSE = 'COURSES/LOAD_COURSE';
const RESET_COURSE = 'COURSES/RESET_COURSE';
const DELETE_COURSE = 'COURSES/DELETE_COURSE';
const UPDATE_COURSE = 'COURSES/UPDATE_COURSE';

const listCourses = courses => {
  return {
    type: LIST_COURSES,
    courses
  }
}

const deleteCourse = courses => {
  return {
    type: DELETE_COURSE,
    courses
  }
}

const addCourse = course => {
  return {
    type: ADD_COURSE,
    course
  }
}

const loadCourse = course => {
  return {
    type: LOAD_COURSE,
    course
  }
}

const resetCourse = () => {
  return {
    type: RESET_COURSE,
    courses: [],
    course: {
      id: "",
      title: "",
      watchHref: "",
      authorId: "",
      length: "",
      category: ""
    }
  }
}

const updateCourse = course => {
  return {
    type: UPDATE_COURSE,
    course
  }
}

export {
  LIST_COURSES,
  ADD_COURSE,
  LOAD_COURSE,
  RESET_COURSE,
  DELETE_COURSE,
  UPDATE_COURSE,
  listCourses,
  deleteCourse,
  addCourse,
  loadCourse,
  resetCourse,
  updateCourse
}
