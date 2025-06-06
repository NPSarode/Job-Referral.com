import { all, fork } from "redux-saga/effects";

import authSaga from "./Authentication/saga";

import userSaga from "./Configuration/User/saga";

import jobDetailsSaga from "./Summary/saga";

export default function* rootSaga() {
  yield all([
    fork(authSaga),
    fork(userSaga),
    fork(jobDetailsSaga)
  ]);
}
