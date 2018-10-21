import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers/reducers';
import HomePage from './containers/homePage';
import AboutPage from './containers/aboutPage';
import AuthorPage from './containers/authorPage';
import CoursePage from './containers/coursePage';
import ManageCoursePage from './components/course/manageCoursePage';
import manageAuthorPage from './components/author/manageAuthorPage';
import './css/index.css';
import './css/bootstrap.min.css';


const store = createStore(
  reducers,
  window.devToolsExtension && window.devToolsExtension()
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <div>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/about" component={AboutPage} />
        <Route exact path="/courses" component={CoursePage} />
        <Route exact path="/course" component={ManageCoursePage} />
        <Route exact path="/course/:id" component={ManageCoursePage} />
        <Route exact path="/authors" component={AuthorPage} />
        <Route exact path="/author" component={manageAuthorPage} />
        <Route exact path="/author/:id" component={manageAuthorPage} />
      </div>
    </BrowserRouter>
  </Provider>, document.getElementById('root'));
