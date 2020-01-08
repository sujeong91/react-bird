// base
import React from 'react';
import PropTypes from 'prop-types';
import withRedux from 'next-redux-wrapper';
import { applyMiddleware, compose, createStore } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';

// screen
import Head from 'next/head';
import { AppLayout } from '../components';

// data
import rootReducer from '../reducers';
import rootSaga from '../sagas';

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

export default withRedux((initialState) => {
  const sagaMiddleware = createSagaMiddleware();
  const middlewares = [sagaMiddleware];
  const enhancer = process.env.NODE_ENV === 'production'
    ? compose(applyMiddleware(...middlewares))
    : composeWithDevTools(
      applyMiddleware(...middlewares),
    );
  const store = createStore(rootReducer, initialState, enhancer);
  sagaMiddleware.run(rootSaga);
  return store;
})(ReactBird);
