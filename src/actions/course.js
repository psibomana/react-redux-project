import * as CourseActionTypes from '../actionTypes/course';

export const listCourses = courses => {
  return {
    type: CourseActionTypes.LIST_COURSES,
    courses: courses
  }
}

export const deleteCourse = index => {
  return {
    type: CourseActionTypes.DELETE_COURSE,
    index
  }
}

export const addCourse = course => {
  return {
    type: CourseActionTypes.ADD_COURSE,
    course
  }
}

export const updateCourse = course => {
  return {
    type: CourseActionTypes.UPDATE_COURSE,
    course
  }
}
