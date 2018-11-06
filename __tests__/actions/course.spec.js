import configureStore from 'redux-mock-store'
import * as CourseActions from "../../src/actions/course";

describe('Course Actions Test', () => {
  let store;
  beforeEach(() => {
    const mockStore = configureStore();
    const initialState = {
      CourseReducer: [
        {
          id: "react-flux-building-applications",
          title: "Building Applications in React and Flux",
          watchHref: "http://www.pluralsight.com/courses/react-flux-building-applications",
          authorId: "cory-house",
          length: "5:08",
          category: "JavaScript"
        },
        {
          id: "clean-code",
          title: "Clean Code: Writing Code for Humans",
          watchHref: "http://www.pluralsight.com/courses/writing-clean-code-humans",
          authorId: "cory-house",
          length: "3:10",
          category: "Software Practices"
        }
      ]
    };
    store = mockStore(initialState);
  })

  it('should return list courses action object', () => {
    const courses = [{
      id: "web-components-shadow-dom",
      title: "Web Component Fundamentals",
      watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
      authorId: "cory-house",
      length: "5:10",
      category: "HTML5"
    }]

    store.dispatch(CourseActions.listCourses(courses));
    const action = store.getActions()[0];
    expect(action.courses).toEqual(courses);
    expect(action.type).toEqual(CourseActions.LIST_COURSES);
  });

  it('should return delete course action object', () => {
    const courses = [{
      id: "web-components-shadow-dom",
      title: "Web Component Fundamentals",
      watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
      authorId: "cory-house",
      length: "5:10",
      category: "HTML5"
    }]

    store.dispatch(CourseActions.deleteCourse(courses));
    const action = store.getActions()[0];

    expect(action.courses.length).toEqual(1);
    expect(action.type).toEqual(CourseActions.DELETE_COURSE);
  });


  it('should return add course action object', () => {
    const course = {
      id: "web-components-shadow-dom",
      title: "Web Component Fundamentals",
      watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
      authorId: "cory-house",
      length: "5:10",
      category: "HTML5"
    }

    store.dispatch(CourseActions.addCourse(course));
    const action = store.getActions()[0];

    expect(action.course).toEqual(course);
    expect(action.course).toHaveProperty("id");
    expect(action.course).toHaveProperty("title");
    expect(action.course).toHaveProperty("watchHref");
    expect(action.course).toHaveProperty("authorId");
    expect(action.course).toHaveProperty("length");
    expect(action.course).toHaveProperty("category");
    expect(action.type).toEqual(CourseActions.ADD_COURSE);
  });


  it('should return update course action object', () => {
    const course = {
      id: "web-components-shadow-dom",
      title: "Web Component Fundamentals",
      watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
      authorId: "cory-house",
      length: "5:10",
      category: "HTML5"
    }

    store.dispatch(CourseActions.updateCourse(course));
    const action = store.getActions()[0];

    expect(action.course).toEqual(course);
    expect(action.course).toHaveProperty("id");
    expect(action.course).toHaveProperty("title");
    expect(action.course).toHaveProperty("watchHref");
    expect(action.course).toHaveProperty("authorId");
    expect(action.course).toHaveProperty("length");
    expect(action.course).toHaveProperty("category");
    expect(action.type).toEqual(CourseActions.UPDATE_COURSE);
  });
});
