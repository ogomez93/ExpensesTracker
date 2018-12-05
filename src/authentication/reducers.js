import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  LOGOUT,
  LOGOUT_SUCCESS,
  LOGOUT_ERROR,
  SET_EMAIL,
  SET_PASSWORD
} from './actionTypes';

import initialState from './constants/initialState';

const authentication = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loggingIn: true
      };

    case LOGIN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        data: action.payload.data,
        loggingIn: false,
        error: {}
      };
    
    case LOGIN_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload.error,
        loggingIn: false
      };

    case LOGOUT:
      return {
        ...state,
        loggingOut: true
      };

    case LOGOUT_SUCCESS:
      return {
        ...state,
        authenticated: false,
        token: '',
        loggingOut: false,
        error: {}
      };
    
    case LOGOUT_ERROR:
      return {
        ...state,
        authenticated: false,
        error: action.payload.error,
        loggingOut: false
      };
    
    case SET_EMAIL:
      return {
        ...state,
        email: action.payload.email
      };
    
    case SET_PASSWORD:
      return {
        ...state,
        password: action.payload.password
      };
    
    default:
      return state;
  }
};

export default authentication;
