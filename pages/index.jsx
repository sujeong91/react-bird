// base
import React from 'react';

// screen
import { PostForm } from '../components';

const dummy = {
  isLoggedIn: true,
};

const Home = () => (
  <div>
    {dummy.isLoggedIn && <PostForm />}
  </div>
);

export default Home;
