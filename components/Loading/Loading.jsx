// base
import React from 'react';
import PropTypes from 'prop-types';

// screen
import { Spin } from 'antd';

const Loading = ({ isLoading, children }) => (
  <Spin spinning={isLoading}>
    {children}
  </Spin>
);

export default Loading;

Loading.propTypes = {
  isLoading: PropTypes.bool,
  children: PropTypes.object,
};
