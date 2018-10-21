import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {bindActionCreators} from 'redux';
import * as CourseActions from '../../actions/course';
import Header from '../common/header';
import CourseForm from './courseForm';
import CourseApi from '../../api/mockCourseApi';

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
      allAuthors: () => {},
      onSave: () => {},
      onChange: () => {},
      saving: () => {},
      errors: {}
    };

    CourseApi.getCoursesByID(props.match.params.id).then(course => {
      this.setState({
        course: course
      });
    });
  }

  render() {
    return (

      <div className="container">
        <Header/>
        <div className="align">
          <CourseForm
            course={this.state.course}
            errors={this.state.errors}
            allAuthors={[]}
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
  return {
    course: state.course
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(CourseActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
