// base
import {
  all, fork, call, put, takeEvery,
} from 'redux-saga/effects';
import { httpClient } from '../utils';
import {
  LOG_IN_REQUEST,
  loginSuccessAction,
  loginFailureAction,
  LOG_OUT_REQUEST,
  logoutSuccessAction,
  logoutFailureAction,
  LOAD_USER_REQUEST,
  loadUserSuccessAction,
  loadUserFailureAction,
  SIGN_UP_REQUEST,
  signUpSuccessAction,
  signUpFailureAction,
} from '../reducers/user';

function loginAPI(loginData) {
  return httpClient.post('/user/login', loginData);
}

function* loginSaga(action) {
  try {
    const result = yield call(loginAPI, action.data);
    yield put(loginSuccessAction(result.data));
  } catch (e) {
    console.error(e);
    yield put(loginFailureAction(e.message));
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, loginSaga);
}

function logoutAPI() {
  return httpClient.post('/user/logout');
}

function* logoutSaga(action) {
  try {
    const result = yield call(logoutAPI, action.data);
    yield put(logoutSuccessAction(result.data));
  } catch (e) {
    console.error(e);
    yield put(logoutFailureAction(e.message));
  }
}

function* watchLogout() {
  yield takeEvery(LOG_OUT_REQUEST, logoutSaga);
}

function loadUserAPI() {
  return httpClient.get('/user');
}

function* loadUserSaga() {
  try {
    const result = yield call(loadUserAPI);
    yield put(loadUserSuccessAction(result.data));
  } catch (e) {
    console.error(e);
    yield put(loadUserFailureAction(e.message));
  }
}

function* watchLoadUser() {
  yield takeEvery(LOAD_USER_REQUEST, loadUserSaga);
}

function signUpAPI(signUpData) {
  return httpClient.post('/user', signUpData);
}

function* signUpSaga(action) {
  try {
    yield call(signUpAPI, action.data);
    yield put(signUpSuccessAction());
  } catch (e) {
    console.error(e);
    yield put(signUpFailureAction(e.message));
  }
}

function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUpSaga);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
    fork(watchLogout),
    fork(watchLoadUser),
    fork(watchSignUp),
  ]);
}
