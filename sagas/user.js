// base
import {
  all, fork, call, delay, put, takeEvery,
} from 'redux-saga/effects';
import { httpClient } from '../utils';
import {
  LOG_IN_REQUEST,
  loginSuccessAction,
  loginFailureAction,
} from '../reducers/user';

function loginAPI(loginData) {
  return httpClient.post('/user/login', loginData);
}

function* loginSaga(action) {
  try {
    // yield call(loginAPI, action.data);
    yield delay(2000);
    yield put(loginSuccessAction('test'));
  } catch (e) {
    console.error(e);
    yield put(loginFailureAction(e.message));
  }
}

function* watchLogin() {
  yield takeEvery(LOG_IN_REQUEST, loginSaga);
}

export default function* userSaga() {
  yield all([
    fork(watchLogin),
  ]);
}
