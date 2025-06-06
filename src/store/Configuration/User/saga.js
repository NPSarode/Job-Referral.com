import { call, put, takeEvery } from "redux-saga/effects";

import { GET_USERS, GET_USER_BY_ID } from "./actionTypes";

import { getUserByIdFail, getUserByIdSuccess, getUsersFail, getUsersSuccess } from "./actions";
import { getUserById, getUsers } from "../../../helper/BackendHelper";


function* onGetUsers() {
  try {
    const response = yield call(getUsers);
    yield put(getUsersSuccess(response));
  } catch (error) {
    yield put(getUsersFail(error));
  }
}

function* onGetUserById({payload: id}) {
  try {
    const response = yield call(getUserById, id);
    yield put(getUserByIdSuccess(response));
  } catch (error) {
    yield put(getUserByIdFail(error));
  }
}

function* userSaga() {
  yield takeEvery(GET_USERS, onGetUsers);
  yield takeEvery(GET_USER_BY_ID, onGetUserById);
}

export default userSaga;
