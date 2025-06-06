import { GET_USERS, GET_USERS_FAIL, GET_USERS_SUCCESS, GET_USER_BY_ID, GET_USER_BY_ID_FAIL, GET_USER_BY_ID_SUCCESS } from "./actionTypes"


// getUsers
export const getUsers = (data) => ({
    type: GET_USERS,
    payload: data
})

export const getUsersSuccess = (data) => ({
    type: GET_USERS_SUCCESS,
    payload: data
})

export const getUsersFail = (err) => ({
    type: GET_USERS_FAIL,
    payload: err
})

// getUserById
export const getUserById = id => ({
    type: GET_USER_BY_ID,
    payload: id
})

export const getUserByIdSuccess = (data) => ({
    type: GET_USER_BY_ID_SUCCESS,
    payload: data
})

export const getUserByIdFail = (err) => ({
    type: GET_USER_BY_ID_FAIL,
    payload: err
})