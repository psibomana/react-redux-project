import React from 'react'
import * as CourseActions from '../../src/actions/course'
import CourseReducer from '../../src/reducers/course'

describe('Course Reducer Test', () => {
  it('should return empty list of courses', () => {
    const action = {
      type: CourseActions.LIST_COURSES,
      courses: []
    }

    expect(CourseReducer(undefined, action).courses).toEqual([])
  })

  it('should return an array of one course', () => {
    const course = {
      id: "course-id",
      title: "Course Title",
      watchHref: "http://www.pluralsight.com/courses/course-id",
      authorId: "test-author",
      length: "2:30",
      category: "CateagoryTest"
    }

    const action = {
      type: CourseActions.ADD_COURSE,
      course
    }

    expect(CourseReducer(undefined, action).course).toEqual(course)
  })

  it('should return empty list of courses on deletion since none is passed', () => {
    const action = {
      type: CourseActions.DELETE_COURSE,
      courses: []
    }

    expect(CourseReducer(undefined, action).courses).toEqual([])
  })

  it('should return the updated course value', () => {
    const course = {
      id: "career-reboot-for-developer-mind",
      title: "Becoming an Outlier: Reprogramming the Developer Mind",
      watchHref: "http://www.pluralsight.com/courses/career-reboot-for-developer-mind",
      authorId: "cory-house",
      length: "2:30",
      category: "Career-Updated"
    }

    const action = {
      type: CourseActions.UPDATE_COURSE,
      course
    }

    expect(CourseReducer(undefined, action).course.category).toEqual(course.category)
  })

  it('should return the inital state', () => {
    const action = {
      type: undefined
    }
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

    expect(CourseReducer(undefined, action)).toEqual(initialState)
  })
})
