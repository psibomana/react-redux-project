import React from 'react';
import PropTypes from 'prop-types';
import AuthorListRow from './authorListRow';

const AuthorList = props => {

  const { authors } = props;

  return (
    <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>First Name</th>
          <th>Last Name</th>
        </tr>
      </thead>
      <tbody>
        {authors.map(author =>
          <AuthorListRow key={author.id} author={author}/>
        )}
      </tbody>
    </table>
  );
};


AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default AuthorList;
