import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as AuthorActions from '../../actions/author';
import Header from '../common/header';
import AuthorForm from './authorForm';
import AuthorApi from '../../api/mockAuthorApi';

class ManageAuthorPage extends React.Component {

  constructor(props) {
    super(props);

    let author = {
      id: '',
      firstName: '',
      lastName: '',
    };

    this.state = {
      author: author,
      allAuthors: [],
      onSave: props.actions.addAuthor,
      onChange: props.actions.updateAuthor,
      onDelete: props.actions.deleteAuthor,
      saving: false,
      errors: {}
    };

    AuthorApi.getAuthorByID(props.match.params.id).then(author => {
      this.setState({
        author: author
      });
    });
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <div className="align">
          <AuthorForm
            author={this.state.author}
            errors={this.state.errors}
            allAuthors={this.state.allAuthors}
            onChange={this.state.onChange}
            onSave={this.state.onSave}
            onDelete={this.state.onDelete}
            saving={this.state.saving}
            history={this.props.history}
          />
        </div>
      </div>
    );
  }
}

ManageAuthorPage.propTypes = {
  author: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  let author = {
    id: '',
    firstName: '',
    lastName: '',
  };
  return {
    author: author
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
