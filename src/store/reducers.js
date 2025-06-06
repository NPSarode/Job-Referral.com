import { combineReducers } from "@reduxjs/toolkit";

import authReducer from './Authentication/reducer'

import userReducer from './Configuration/User/reducer'

import jobDetailsReducer from './Summary/reducer'

export const rootReducer = combineReducers({
    authReducer,
    userReducer,
    jobDetailsReducer
})