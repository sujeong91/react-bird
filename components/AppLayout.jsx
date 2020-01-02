// base
import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

// screen
import { Row, Col } from 'antd';
import { Nav } from '.';

const AppLayout = ({ children }) => (
  <div>
    <Nav />
    <Row gutter={8}>
      <Col xs={24} md={6}>
        Login Info
      </Col>
      <Col xs={24} md={12}>
        {children}
      </Col>
      <Col xs={24} md={6}>
        <Link href="https://github.com/sujeong91/react-bird" prefetch={false}>
          <a target="_blank">Made by sujeongKim</a>
        </Link>
      </Col>
    </Row>
  </div>
);

export default AppLayout;

AppLayout.propTypes = {
  children: PropTypes.node,
};
