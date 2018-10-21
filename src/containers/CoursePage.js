import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CourseAPI from '../api/mockCourseApi';
import * as CourseActionCreators from '../actions/course';
import Header from '../components/common/header';
import CourseList from '../components/course/courseList';

class CoursePage extends Component {

  static propTypes = {
    courses: PropTypes.array.isRequired
  };

  constructor(props) {
    super(props);

    CourseAPI.getAllCourses().then(result => {
      props.actions.listCourses(result);
    });
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <div className="align">
          <h3>Courses</h3>
          <CourseList
            courses={this.props.courses}
            addCourse={this.props.actions.addCourse}
            deleteCourse={this.props.actions.deleteCourse}
            updateCourse={this.props.actions.updateCourse}
            listCourses={this.props.actions.listCourses}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state.CourseReducer
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(CourseActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
