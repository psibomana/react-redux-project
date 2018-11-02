import CourseApi from '../../src/api/mockCourseApi'

describe('Course API', () => {
  it('should return a list of courses', async () => {
    const courses = await CourseApi.getAllCourses();
    expect(courses.length).toEqual(5);
  })

  it('should return an course', async () => {
    const course =
      await CourseApi.getCoursesByID('architecture');
    expect(course)
      .toEqual(
        {
          id: "architecture",
          title: "Architecting Applications for the Real World",
          watchHref: "http://www.pluralsight.com/courses/architecting-applications-dotnet",
          authorId: "cory-house",
          length: "2:52",
          category: "Software Architecture"
        });
  })

  it('should return the newly created course', async () => {
    const course = {
      id: "test",
      title: "Test Course",
      authorId: "cory-house",
      length: "5:00",
      category: "Test"
    }
    const savedcourse = await CourseApi.saveCourse(course);
    expect(savedcourse).toEqual(course);
  })
})
