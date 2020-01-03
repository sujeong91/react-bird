// base
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styled from 'styled-components';

// screen
import { Row, Col } from 'antd';
import { Nav } from '../index';

// NOTE: Row에 gutter를 하면 브라우저에 가로 스크롤이 생겨 각 col에 padding으로 설정.
const LeftCol = styled(Col)`
  padding: 8px 4px 8px 8px;
`;
const CenterCol = styled(Col)`
  padding: 8px 4px;
`;
const RightCol = styled(Col)`
  padding: 8px 8px 8px 4px;
`;

const dummy = {
  isLoggedIn: true,
};

const AppLayout = ({ children }) => (
  <div>
    <Nav />
    <Row>
      <LeftCol xs={24} md={6}>
        {dummy.isLoggedIn
          ? 'login'
          : 'logout'}
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

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node,
};
