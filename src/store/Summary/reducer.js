import { ADD_JOB_FAIL, ADD_JOB_SUCCESS, GET_JOB_SUMMARY_FAIL, GET_JOB_SUMMARY_SUCCESS } from "./actionTypes";

const INIT_STATE = {
  details: [],
  error: {}
};

const jobSummary = (state = INIT_STATE, action) => {
  switch (action.type) {
    case GET_JOB_SUMMARY_SUCCESS: {
      if(action.payload.success) {
        return {
          ...state,
          details: action.payload.data
        };
      }
      return state
    }

    case GET_JOB_SUMMARY_FAIL: {
      return {
        ...state,
        error: action.payload
      };
    }
    
    case ADD_JOB_SUCCESS: {
      return {
        ...state,
        details: [...state.details, action.payload]
      };
    }

    case ADD_JOB_FAIL: {
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

export default jobSummary;
