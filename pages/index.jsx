// base
import React from 'react';
import styled from 'styled-components';

// screen
import { PostForm, PostCard } from '../components';

const PostWrapper = styled.div`
  .PostCard {
    margin-top: 8px;

    &::first-child {
      margin-top: 0;
    }
  }
`;

const dummy = {
  isLoggedIn: true,
  mainPosts: [{
    User: {
      id: 1,
      nickname: 'sujeong',
    },
    content: '첫 번째 게시글',
    img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
  },
  {
    User: {
      id: 2,
      nickname: '너구리',
    },
    content: '두 번째 게시글',
    img: 'https://bookthumb-phinf.pstatic.net/cover/137/995/13799585.jpg?udate=20180726',
  }],
};

const Home = () => (
  <div className="Home">
    {dummy.isLoggedIn && <PostForm />}
    <PostWrapper>
      {dummy.mainPosts.map((post) => (
        <PostCard key={post.User.id} post={post} />
      ))}
    </PostWrapper>
  </div>
);

export default Home;
