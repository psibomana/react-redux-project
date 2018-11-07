import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseActions from '../../actions/course';
import Header from '../common/header';
import CourseForm from './courseForm';
import CourseApi from '../../api/mockCourseApi';
import AuthorApi from '../../api/mockAuthorApi';

class ManageCoursePage extends React.Component {

  constructor(props) {
    super(props);

    let course = {
      id: '',
      watchHref: '',
      title: '',
      authorId: '',
      length: '',
      category: ''
    };

    this.state = {
      course: course,
      allAuthors: [],
      onSave: props.actions.addCourse,
      onChange: props.actions.updateCourse,
      onDelete: props.actions.deleteCourse,
      saving: false,
      errors: {}
    };

    CourseApi.getCoursesByID(props.match.params.id).then(course => {
      this.setState({
        course: course
      });
    });

    AuthorApi.getAllAuthors().then(authors => {
      this.setState({
        allAuthors: authors
      });
    });
  }

  render() {
    const {
      course,
      errors,
      allAuthors,
      onChange,
      onSave,
      onDelete,
      saving
    } = this.state;

    return (
      <div className="container">
        <Header/>
        <div className="align">
          <CourseForm
            course={course}
            errors={errors}
            allAuthors={allAuthors}
            onChange={onChange}
            onSave={onSave}
            onDelete={onDelete}
            saving={saving}
            history={this.props.history}
          />
        </div>
      </div>
    );
  }
}

ManageCoursePage.propTypes = {
  course: PropTypes.object.isRequired
};

const mapStateToProps = state => {
  let course = {
    id: '',
    watchHref: '',
    title: '',
    authorId: '',
    length: '',
    category: ''
  };
  return {
    course: course
  };
}


function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CourseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
