// base
import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';

// screen
import Head from 'next/head';
import { AppLayout } from '../components';

// data
import rootReducer from '../reducers';

const ReactBird = ({ Component, store }) => (
  (
    <Provider store={store}>
      <Head>
        <title>ReactBird</title>
      </Head>
      <AppLayout>
        <Component />
      </AppLayout>
    </Provider>
  )
);

ReactBird.propTypes = {
  Component: PropTypes.elementType,
  store: PropTypes.object,
};

export default withRedux((initialState, options) => {
  const middlewares = [];
  const enhancer = compose(
    applyMiddleware(...middlewares),
    !options.isServer && typeof window.__REDUX_DEVTOOLS_EXTENSION__ !== 'undefined' ? window.__REDUX_DEVTOOLS_EXTENSION__() : (f) => f,
  );
  const store = createStore(rootReducer, initialState, enhancer);
  return store;
})(ReactBird);
