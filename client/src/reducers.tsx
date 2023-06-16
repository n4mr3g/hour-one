import { AnyAction } from 'redux';
import { User } from './dataTypes';

const offersReducer = (state: string[] = [], action: AnyAction) => {
  switch (action.type) {
    case "SET_OFFERS":
      state = [...action.payload];
      console.log(state);
      return state;
    default:
      return state;
  }
};

const userInfoReducer = (state: User = {
  name: '',
  email: '',
  password: '',
  image: ''
}, action: AnyAction) => {
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

// const reducers = combineReducers({ offers, userInfo });

export { offersReducer, userInfoReducer };
