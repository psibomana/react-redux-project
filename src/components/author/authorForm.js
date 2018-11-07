import React from 'react';
import PropTypes from 'prop-types';
import TextInput from '../common/textInput';
import AuthorApi from '../../api/mockAuthorApi';

const AuthorForm = ({author, onSave, onChange, onDelete, saving, errors, history}) => {

  const onDeleteAuthor = () => {
    history.push('/authors');

    AuthorApi.deleteAuthor(author.id).then(result => {
      onDelete(result);
    });
  }


  const onFiedChange = (e) => {
    author[e.target.name] = e.target.value;
    onChange(author);
  }

  const onUpdateAuthor = () => {
    history.push('/authors');

    AuthorApi.saveAuthor(author).then(result => {
      onSave(result);
    })
  }

  return (
    <form>
      <h1>Manage Author</h1>
      <TextInput
        name="firstName"
        label="First Name"
        value={author.firstName}
        onChange={onFiedChange}/>
      <TextInput
        name="lastName"
        label="Last Name"
        value={author.lastName}
        onChange={onFiedChange}/>
      <input
        type="button"
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
  onChange: PropTypes.func.isRequired
};

export default AuthorForm;
