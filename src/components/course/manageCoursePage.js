import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as CourseActions from '../../actions/course';
import * as AuthorActions from '../../actions/author';
import Header from '../common/header';
import CourseForm from './courseForm';
import CourseApi from '../../api/mockCourseApi';
import AuthorApi from '../../api/mockAuthorApi';

class ManageCoursePage extends React.Component {

  constructor(props) {
    super(props);
    this.listAuthors();

    this.state = {
      course: this.props.course
    }
  }

  componentDidMount(){
    const courseId = this.props.match.params.id;
    if(courseId) {
      this.loadCourse(courseId)
    } else {
      const result = this.props.courseActions.resetCourse()
      this.setState({
        course: result.course
      })
    }
  }

  listAuthors = () => {
    AuthorApi.getAllAuthors().then(authors => {
      this.props.authorActions.listAuthors(authors);
    });
  }

  loadCourse = (courseId) => {
    CourseApi.getCoursesByID(courseId).then(course => {
      this.props.courseActions.loadCourse(course);
      this.setState({
        course
      })
    });
  }

  updateCourse = (course) => {
    this.setState({
      course
    })
  }

  render() {
    const {
      errors,
      authors
    } = this.props;

    const { addCourse, deleteCourse } = this.props.courseActions;

    return (
      <div className="container">
        <Header/>
        <div className="align">
          <CourseForm
            course={this.state.course}
            allAuthors={authors}
            onSave={addCourse}
            onChange={this.updateCourse}
            onDelete={deleteCourse}
            saving={false}
            errors={errors}
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
  return {
    course: state.CourseReducer.course,
    courses: state.CourseReducer.courses,
    authors: state.AuthorReducer.authors
  };
}


function mapDispatchToProps(dispatch) {
  return {
    courseActions: bindActionCreators(CourseActions, dispatch),
    authorActions: bindActionCreators(AuthorActions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ManageCoursePage);
