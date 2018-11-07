import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/textInput';
import SelectInput from '../common/selectInput';

function CourseForm({course, allAuthors, onSave, onChange, onDelete, saving, errors, history}) {

  const onDeleteCourse = () => {
    history.push('/courses');
    onDelete(course.id);
  }

  const onFiedChange = (e) => {
    course[e.target.name] = e.target.value;
    onChange(course);
  }

  const onUpdateCourse = () => {
    history.push('/courses');
    onSave(course);
  }

  return (
    <form>
      <h1>Manage Course</h1>
      <TextInput
        name="title"
        label="Title"
        value={course.title}
        onChange={onFiedChange}
        error={errors.title}/>

      <SelectInput
        id={course.id}
        name="authorId"
        label="Author"
        value={course.authorId}
        defaultOption="Select Author"
        options={allAuthors}
        onChange={onFiedChange}
        error={errors.authorId}/>

      <TextInput
        name="category"
        label="Category"
        value={course.category}
        onChange={onFiedChange}
        error={errors.category}/>

      <TextInput
        name="length"
        label="Length"
        value={course.length}
        onChange={onFiedChange}
        error={errors.length}/>

      <input
        type="button"
        disabled={saving}
        value='Save'
        className="btn btn-primary"
        onClick={onUpdateCourse}/>
      <input
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
