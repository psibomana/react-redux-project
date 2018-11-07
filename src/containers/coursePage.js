import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import CourseAPI from '../api/mockCourseApi';
import * as CourseActionCreators from '../actions/course';
import Header from '../components/common/header';
import CourseList from '../components/course/courseList';

class CoursePage extends Component {

  constructor(props) {
    super(props);

    CourseAPI.getAllCourses().then(result => {
      props.actions.listCourses(result);
    });
  }

  addNewCourse = () => {
    this.props.history.push('/course');
  }

  render() {
    return (
      <div className="container">
        <Header/>
        <div className="align v-offset-10">
          <div className="row">
            <div className="col">
              <h3>Courses</h3>
            </div>
            <div className="col">
              <input
                type="submit"
                value='Add Course'
                className="btn btn-primary btn-sm"
                onClick={this.addNewCourse}
                />
            </div>
          </div>
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

CoursePage.propTypes = {
  courses: PropTypes.array.isRequired
};

const mapStateToProps = state => {
  return {
    courses: state.CourseReducer.courses
  }
}

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(CourseActionCreators, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CoursePage);
