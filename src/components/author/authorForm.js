import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/textInput';

const AuthorForm = ({author, onSave, onChange, onDelete, saving, errors, history}) => {

  const onDeleteAuthor = () => {
    history.push('/authors');
    onDelete(author.id);
  }


  const onFiedChange = (e) => {
    author[e.target.name] = e.target.value;
    onChange(author);
  }

  const onUpdateAuthor = () => {
    history.push('/authors');
    onSave(author);
  }

  return (
    <form>
      <h1>Manage Author</h1>
      <TextInput
        name="firstName"
        label="First Name"
        value={author.firstName}
        onChange={onFiedChange}
        error={errors.firstName}/>
      <TextInput
        name="lastName"
        label="Last Name"
        value={author.lastName}
        onChange={onFiedChange}
        error={errors.lastName}/>
      <input
        type="button"
        disabled={saving}
        value='Save'
        className="btn btn-primary"
        onClick={onUpdateAuthor}/>
      <input
        type="button"
        value='Delete'
        className="btn btn-danger"
        onClick={onDeleteAuthor}/>
    </form>
  );
};


AuthorForm.propTypes = {
  author: PropTypes.object.isRequired,
  onSave: PropTypes.func.isRequired,
  onChange: PropTypes.func.isRequired,
  saving: PropTypes.bool,
  errors: PropTypes.object
};

export default AuthorForm;
