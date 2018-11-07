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

    this.state = {
      author: {
        id: "",
        firstName: "",
        lastName: ""
      }
    }
    const authorID = props.match.params.id;

    if(authorID) {
      AuthorApi.getAuthorByID(authorID).then(author => {
        props.actions.getAuthor(author)
        this.setState({
          author
        })
      })
    }
  }

  onUpdate = author => {
    this.setState({
      author
    })
  }

  render() {
    const {actions, history} = this.props;
    return (
      <div className="container">
        <Header/>
        <div className="align">
          <AuthorForm
            author={this.state.author}
            onChange={this.onUpdate}
            onSave={actions.addAuthor}
            onDelete={actions.deleteAuthor}
            history={history}
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
  return {
    author: state.AuthorReducer.author,
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(AuthorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageAuthorPage);
