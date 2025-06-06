import {
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT_FAIL,
  LOGOUT_SUCCESS,
  REGISTER_FAIL,
  REGISTER_SUCCESS,
} from "./actionTypes";

const INIT_STATE = {
  data: {},
  error: {}
};

const authReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case LOGIN_SUCCESS: {
      return {
        ...state,
        data: action.payload.data
      };
    }

    case LOGIN_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    case REGISTER_SUCCESS: {
      return {
        ...state,
        data: action.payload
      };
    }

    case REGISTER_FAIL: {
       return {
        ...state,
        error: action.payload
      };
    }
    case LOGOUT_SUCCESS: {
      return {
        ...state,
        data: ""
      };
    }

    case LOGOUT_FAIL: {
       return {
        ...state,
        error: action.payload
      };
    }

    default : {
        return state
    }
  }
};

export default authReducer;
