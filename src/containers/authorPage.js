import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as AuthorActionCreators from '../actions/author';
import Header from '../components/common/header';
import AuthorList from '../components/author/authorList';
import AuthorApi from '../api/mockAuthorApi';

class AuthorPage extends Component {

  static propTypes = {
    authors: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    AuthorApi.getAllAuthors().then(result => {
      props.actions.listAuthors(result);
    });
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <div className="align">
          <h3>Authors</h3>
          <AuthorList
            authors={this.props.authors}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    authors: state.AuthorReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(AuthorActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AuthorPage);
