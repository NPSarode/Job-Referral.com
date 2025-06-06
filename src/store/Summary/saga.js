import { call, put, takeEvery } from "redux-saga/effects";

import { ADD_JOB, GET_JOB_SUMMARY } from "./actionTypes";

import { addJobFail, addJobSuccess, getJobSummaryFail, getJobSummarySuccess } from "./actions";
import { addJobDetails, getCompanyDetails } from "../../helper/BackendHelper";


function* onGetJobDetails() {
  try {
    const response = yield call(getCompanyDetails);
    yield put(getJobSummarySuccess(response));
  } catch (error) {
    yield put(getJobSummaryFail(error));
  }
}

function* onAddJobDetails({ payload: data}) {
  try {
    const response = yield call(addJobDetails, data);
    yield put(addJobSuccess(response));
  } catch (error) {
    yield put(addJobFail(error));
  }
}

function* userSaga() {
  yield takeEvery(GET_JOB_SUMMARY, onGetJobDetails);
  yield takeEvery(ADD_JOB, onAddJobDetails);
}

export default userSaga;
