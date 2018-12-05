import { SET_USER } from './actionTypes';

import initialState from './constants/initialState';

const user = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.payload.user
      };
    
    default:
      return state;
  }
};

export default user;
