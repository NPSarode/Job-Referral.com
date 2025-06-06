import { GET_USERS_FAIL, GET_USERS_SUCCESS, GET_USER_BY_ID_FAIL, GET_USER_BY_ID_SUCCESS } from "./actionTypes";

const INIT_STATE = {
  users: [],
  user: {},
  error: {}
};

const userReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_USERS_SUCCESS: {
      return {
        ...state,
        users: action.payload,
        error: {}
      };
    }

    case GET_USERS_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    
    case GET_USER_BY_ID_SUCCESS: {
      return {
        ...state,
        error: {},
        user: action.payload
      };
    }

    case GET_USER_BY_ID_FAIL: {
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

export default userReducer;
