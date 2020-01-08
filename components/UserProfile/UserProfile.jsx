// base
import React from 'react';
import { useSelector } from 'react-redux';

// screen
import { Avatar, Card } from 'antd';

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);

  return (
    <Card
      actions={[
        <div key="twitter">
          <div>짹짹</div>
          {me.Post.length}
        </div>,
        <div key="following">
          <div>팔로잉</div>
          {me.Followings.length}
        </div>,
        <div key="follower">
          <div>팔로워</div>
          {me.Followers.length}
        </div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar>{me.nickname[0]}</Avatar>}
        title={me.nickname}
      />
    </Card>
  );
};

export default UserProfile;
