import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AuthorActionCreators from '../actions/author';
import Header from '../components/common/header';
import AuthorList from '../components/author/authorList';
import AuthorApi from '../api/mockAuthorApi';

class AuthorPage extends Component {

  constructor(props) {
    super(props);

    AuthorApi.getAllAuthors().then(result => {
      props.actions.listAuthors(result);
    }).catch();
  }

  addNewAuthor = () => {
    this.props.history.push('/author');
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <div className="align v-offset-10">
          <div className="row">
            <div className="col">
              <h3>Authors</h3>
            </div>
            <div className="col">
              <input
                type="submit"
                value='Add Author'
                className="btn btn-primary btn-sm"
                onClick={this.addNewAuthor}
                />
            </div>
          </div>
          <AuthorList
            authors={this.props.authors}/>
        </div>
      </div>
    );
  }
}

AuthorPage.propTypes = {
  authors: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    authors: state.AuthorReducer.authors,
    author: state.AuthorReducer.author,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(AuthorActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
