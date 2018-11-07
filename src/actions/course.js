const LIST_COURSES = 'COURSES/LIST_COURSES';
const ADD_COURSE = 'COURSES/ADD_COURSE';
const DELETE_COURSE = 'COURSES/DELETE_COURSE';
const UPDATE_COURSE = 'COURSES/UPDATE_COURSE';

const listCourses = courses => {
  return {
    type: LIST_COURSES,
    courses: courses
  }
}

const deleteCourse = index => {
  return {
    type: DELETE_COURSE,
    index
  }
}

const addCourse = course => {
  return {
    type: ADD_COURSE,
    course
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
  DELETE_COURSE,
  UPDATE_COURSE,
  listCourses,
  deleteCourse,
  addCourse,
  updateCourse
}
