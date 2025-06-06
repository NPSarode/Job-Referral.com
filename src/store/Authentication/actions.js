import { LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, LOGOUT_FAIL, LOGOUT_SUCCESS, REGISTER, REGISTER_FAIL, REGISTER_SUCCESS } from "./actionTypes"


// LOGIN
export const login = (data, Navigate) => {
    return {
        type: LOGIN,
        payload: {data, Navigate}
    }
}

export const loginSuccess = (data) => ({
    type: LOGIN_SUCCESS,
    payload: data
})

export const loginFail = (err) => ({
    type: LOGIN_FAIL,
    payload: err
})

// LOGOUT

export const logout = (Navigate) => ({
    type: LOGOUT,
    payload: Navigate
})

export const logoutSuccess = (data) => ({
    type: LOGOUT_SUCCESS,
    payload: data
})
export const logoutFail = (err) => ({
    type: LOGOUT_FAIL,
    payload: err
})

// REGISTER

export const register = (data) => ({
    type: REGISTER,
    payload: data
})

export const registerSuccess = (data) => ({
    type: REGISTER_SUCCESS,
    payload: data
})

export const registerFail = (err) => ({
    type: REGISTER_FAIL,
    payload: err
})
