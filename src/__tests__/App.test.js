import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import store from '../store';
import CourseAPI from '../api/mockCourseApi';
import HomePage from '../containers/homePage';
import AboutPage from '../containers/aboutPage';
import CoursePage from '../containers/coursePage';
import AuthorPage from '../containers/authorPage';
import ManageCoursePage from '../components/course/manageCoursePage';
import manageAuthorPage from '../components/author/manageAuthorPage';
import { listCourses } from '../actions/course';

it('renders without crashing', () => {

  CourseAPI.getAllCourses().then(result => {
    store.dispatch(listCourses(result));
  });

  let div = document.createElement('div');

  ReactDOM.render(
    <Provider store={store}>
      <BrowserRouter>
        <div>
          <Route exact path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <Route path="/course/:id" component={ManageCoursePage} />
          <Route path="/courses" component={CoursePage} />
          <Route exact path="/authors" component={AuthorPage} />
          <Route exact path="/author" component={manageAuthorPage} />
          <Route exact path="/author/:id" component={manageAuthorPage} />
        </div>
      </BrowserRouter>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
