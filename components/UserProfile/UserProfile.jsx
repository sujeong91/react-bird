// base
import React from 'react';
import { useSelector } from 'react-redux';

// screen
import { Avatar, Card } from 'antd';

const UserProfile = () => {
  const { user } = useSelector((state) => state.user);

  return (
    <Card
      actions={[
        <div key="twitter">
          <div>짹짹</div>
          {user.Post.length}
        </div>,
        <div key="following">
          <div>팔로잉</div>
          {user.Followings.length}
        </div>,
        <div key="follower">
          <div>팔로워</div>
          {user.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{user.nickname[0]}</Avatar>}
        title={user.nickname}
      />
    </Card>
  );
};

export default UserProfile;
