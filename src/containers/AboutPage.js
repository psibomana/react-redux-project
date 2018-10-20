import React from 'react';
import Header from '../components/common/Header';

const AboutPage = () => {
  return (

    <div className="container">
      <Header/>
      <div class="card align v-offset-10">
        <div class="card-body">
          <h1>About</h1>
          <p>This application uses React, Redux, React Router and a variety of other helpful libraries.</p>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
