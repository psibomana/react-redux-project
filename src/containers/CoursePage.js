import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as CourseActionCreators from '../actions/course';
import Header from '../components/common/header';
import CourseList from '../components/course/courseList';

class CoursePage extends Component {

  static propTypes = {
    courses: PropTypes.array.isRequired
  };

  render() {

    const { dispatch, courses } = this.props;
    const addCourse = bindActionCreators(CourseActionCreators.addCourse, dispatch);
    const deleteCourse = bindActionCreators(CourseActionCreators.deleteCourse, dispatch);
    const updateCourse = bindActionCreators(CourseActionCreators.updateCourse, dispatch);
    const listCourses = bindActionCreators(CourseActionCreators.listCourses, dispatch);

    return (
      <div className="container">
        <Header/>
        <div className="align">
          <h3>Courses</h3>
          <CourseList
            courses={courses}
            addCourse={addCourse}
            deleteCourse={deleteCourse}
            updateCourse={updateCourse}
            listCourses={listCourses}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    courses: state
  }
}

export default connect(mapStateToProps)(CoursePage);
