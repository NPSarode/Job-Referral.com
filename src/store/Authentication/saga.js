import { call, put, takeEvery } from "redux-saga/effects";

import { 
    LOGIN, LOGOUT, REGISTER
} from "./actionTypes";

import {
    loginFail,
    loginSuccess,
    logoutFail,
    logoutSuccess,
    registerFail,
    registerSuccess
} from "./actions";

import { login, logout, register } from "../../helper/BackendHelper";

function* loginUser({payload: { data, Navigate}}) {
  try {
    const response = yield call(login, data);
    if(response) {
      console.log(response)
      localStorage.setItem('token', response.token)
      localStorage.setItem('authUser', JSON.stringify(response.data))
      Navigate("/")
      yield put(loginSuccess(response));
    }
  } catch (error) {
    yield put(loginFail(error));
  }
}

function* logoutUser({payload: Navigate}) {
  try {
    const response = yield call(logout);
    localStorage.removeItem('token')
    localStorage.removeItem('authUser')
    Navigate("/")
    yield put(logoutSuccess(response));
  } catch (error) {
    yield put(logoutFail(error));
  }
}

function* registerUser({payload: data}) {
  try {
    const response = yield call(register, data);
    yield put(registerSuccess(response));
  } catch (error) {
    yield put(registerFail(error));
  }
}

function* authSaga() {
  yield takeEvery(LOGIN, loginUser);
  yield takeEvery(LOGOUT, logoutUser);
  yield takeEvery(REGISTER, registerUser);
}

export default authSaga;
