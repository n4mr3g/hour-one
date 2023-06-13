import { combineReducers } from "redux";
const offers = (state = [], action) => {
  switch (action.type) {
    case "SET_OFFERS":
      state = [...action.payload];
      return state;
    default:
      return state;
  }
};

const userInfo = (state = {}, action) => {
  switch (action.type) {
    case "LOG_IN":
      state = {
        ...state,
        ...action.payload,
      };
      return state;
    default:
      return state;
  }
};

const reducers = combineReducers({ offers, userInfo });

export default reducers;
