import {
  LIST_COURSES,
  DELETE_COURSE,
  ADD_COURSE,
  UPDATE_COURSE,
  listCourses,
  deleteCourse,
  addCourse,
  updateCourse
} from "../../src/actions/course";

describe('Course Actions Test', () => {
  it('should return list courses action object', () => {
    const courses = [{
      id: "web-components-shadow-dom",
      title: "Web Component Fundamentals",
      watchHref: "http://www.pluralsight.com/courses/web-components-shadow-dom",
      authorId: "cory-house",
      length: "5:10",
      category: "HTML5"
    }]

    const listCourseAction = listCourses(courses);

    expect(listCourseAction.courses).toEqual(courses);
    expect(listCourseAction.type).toEqual(LIST_COURSES);
  });

  it('should return delete course action object', () => {
    const index = "web-components-shadow-dom";

    const deleteCourseAction = deleteCourse(index);

    expect(deleteCourseAction.index).toEqual(index);
    expect(deleteCourseAction.type).toEqual(DELETE_COURSE);
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

    const addCourseAction = addCourse(course);

    expect(addCourseAction.course).toEqual(course);
    expect(addCourseAction.course).toHaveProperty("id");
    expect(addCourseAction.course).toHaveProperty("title");
    expect(addCourseAction.course).toHaveProperty("watchHref");
    expect(addCourseAction.course).toHaveProperty("authorId");
    expect(addCourseAction.course).toHaveProperty("length");
    expect(addCourseAction.course).toHaveProperty("category");
    expect(addCourseAction.type).toEqual(ADD_COURSE);
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

    const updateCourseAction = updateCourse(course);

    expect(updateCourseAction.course).toEqual(course);
    expect(updateCourseAction.course).toHaveProperty("id");
    expect(updateCourseAction.course).toHaveProperty("title");
    expect(updateCourseAction.course).toHaveProperty("watchHref");
    expect(updateCourseAction.course).toHaveProperty("authorId");
    expect(updateCourseAction.course).toHaveProperty("length");
    expect(updateCourseAction.course).toHaveProperty("category");
    expect(updateCourseAction.type).toEqual(UPDATE_COURSE);
  });
});
