// base
import React, { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';

// screen
import { Avatar, Card, Button } from 'antd';

// data
import { logoutRequestAction } from '../../reducers/user';

const UserProfile = () => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logoutRequestAction());
  });

  return (
    <Card
      actions={[
        <div key="twitter">
          <div>짹짹</div>
          {me.Posts.length}
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
      <Button onClick={handleLogout}>로그아웃</Button>
    </Card>
  );
};

export default UserProfile;
