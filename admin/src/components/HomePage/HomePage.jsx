import React from 'react';

import { BlogList } from '../index';

const HomePage = () => (
  <div className="homepage">
    <h2>Home Page</h2>
    <h4>General Admin Stuff</h4>
    <p>To Do</p>
    <h4>Blog List</h4>
    <BlogList />
  </div>
);

export default HomePage;
