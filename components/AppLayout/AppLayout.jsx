// base
import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// screen
import { Row, Col } from 'antd';
import { Nav, UserProfile, LoginForm } from '../index';

// data
import { loadUserRequestAction } from '../../reducers/user';

// NOTE: Row에 gutter를 하면 브라우저에 가로 스크롤이 생겨 각 col에 padding으로 설정.
const LeftCol = styled(Col)`
  padding: 12px 6px 12px 12px;
`;
const CenterCol = styled(Col)`
  padding: 12px 6px 32px;
`;
const RightCol = styled(Col)`
  padding: 12px 12px 12px 6px;
`;

const AppLayout = ({ children }) => {
  const { me } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!me) {
      dispatch(loadUserRequestAction());
    }
  }, []);

  return (
    <div className="AppLayout">
      <Nav />
      <Row>
        <LeftCol xs={24} md={6}>
          {me
            ? <UserProfile />
            : <LoginForm />}
        </LeftCol>
        <CenterCol xs={24} md={12}>
          {children}
        </CenterCol>
        <RightCol xs={24} md={6}>
          <Link href="https://github.com/sujeong91/react-bird" prefetch={false}>
            <a target="_blank">Made by sujeongKim</a>
          </Link>
        </RightCol>
      </Row>
    </div>
  );
};

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node,
};
