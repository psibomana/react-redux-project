import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/textInput';
import SelectInput from '../common/selectInput';
import CourseApi from '../../api/mockCourseApi';

function CourseForm({course, allAuthors, onSave, onChange, onDelete, saving, errors, history}) {

  const onDeleteCourse = () => {
    history.push('/courses');

    CourseApi.deleteCourse(course.id).then(result => {
      onDelete(result);
    })
  }

  const onFiedChange = (e) => {
    course[e.target.name] = e.target.value;
    onChange(course);
  }

  const onUpdateCourse = () => {
    history.push('/courses');

    CourseApi.saveCourse(course).then(result => {
      onSave(result);
    });
  }

  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        id="title"
        name="title"
        label="Title"
        value={course.title}
        onChange={onFiedChange}/>

      <SelectInput
        id={course.id}
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onFiedChange}/>

      <TextInput
        id="category"
        name="category"
        label="Category"
        value={course.category}
        onChange={onFiedChange}/>

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onFiedChange}/>

      <input
        id="saveBtn"
        type="button"
        disabled={saving}
        value='Save'
        className="btn btn-primary"
        onClick={onUpdateCourse}/>
      <input
        id="deleteBtn"
        type="button"
        value='Delete'
        className="btn btn-danger"
        onClick={onDeleteCourse}/>
    </form>
  );
}


CourseForm.propTypes = {
  course: PropTypes.object.isRequired,
  allAuthors: PropTypes.array,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default CourseForm;
