import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
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

const mapStateToProps = state => {
  return {
    authors: state.AuthorReducer
  }
}

AuthorList.propTypes = {
  authors: PropTypes.array.isRequired
};

export default connect(mapStateToProps)(AuthorList);
