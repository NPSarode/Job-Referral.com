import { ADD_JOB, ADD_JOB_FAIL, ADD_JOB_SUCCESS, GET_JOB_SUMMARY, GET_JOB_SUMMARY_FAIL, GET_JOB_SUMMARY_SUCCESS } from "./actionTypes"


// GET JOB SUMMARY
export const getJobSummary = () => ({
    type: GET_JOB_SUMMARY,
})

export const getJobSummarySuccess = (data) => ({
    type: GET_JOB_SUMMARY_SUCCESS,
    payload: data
})

export const getJobSummaryFail = (err) => ({
    type: GET_JOB_SUMMARY_FAIL,
    payload: err
})

// ADD JOB
export const addJob = (data) => ({
    type: ADD_JOB,
    payload: data
})

export const addJobSuccess = (data) => ({
    type: ADD_JOB_SUCCESS,
    payload: data
})

export const addJobFail = (err) => ({
    type: ADD_JOB_FAIL,
    payload: err
})