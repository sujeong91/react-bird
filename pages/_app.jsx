// base
import React from 'react';
import PropTypes from 'prop-types';

// screen
import Head from 'next/head';
import { AppLayout } from '../components';

const ReactBird = ({ Component }) => (
  (
    <>
      <Head>
        <title>ReactBird</title>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </>
  )
);

ReactBird.propTypes = {
  Component: PropTypes.elementType,
};

export default ReactBird;
