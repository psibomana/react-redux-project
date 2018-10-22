import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import CourseAPI from '../api/mockCourseApi';
import CourseReducer from '../reducers/course';
import HomePage from '../containers/homePage';
import AboutPage from '../containers/aboutPage';
import CoursePage from '../containers/coursePage';
import ManageCoursePage from '../components/course/manageCoursePage';
import { listCourses } from '../actions/course';

it('renders without crashing', () => {

  const store = createStore(
    CourseReducer,
    window.devToolsExtension && window.devToolsExtension()
  );

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
        </div>
      </BrowserRouter>
    </Provider>, div);
  ReactDOM.unmountComponentAtNode(div);
});
