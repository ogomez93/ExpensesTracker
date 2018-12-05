import {
  LOGIN,
  LOGIN_SUCCESS,
  LOGIN_ERROR,
  SET_EMAIL,
  SET_PASSWORD
} from './actionTypes';

import { API_URL } from 'shared/constants';

export const loggingIn = () => ({
  type: LOGIN,
  payload: {
    loggingIn: true
  }
});

const fetchLogInResponse = (email, password) =>
  fetch(`${API_URL}/login`, {
    method: 'POST',
    body: JSON.stringify({ user: { email, password } }),
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    }
  });

export const tryToLogIn = () => {
  return (dispatch, getState) => {
    dispatch(loggingIn());
    const { email, password } = getState().authentication;
    return fetchLogInResponse(email, password).then(
      res => console.log(res),
      err => console.log(err)
    );
  }
};

export const logInSuccess = data => ({
  type: LOGIN_SUCCESS,
  data
});

export const logInFailure = error => ({
  type: LOGIN_ERROR,
  error
});

export const onEmailChange = value => ({
  type: SET_EMAIL,
  payload: {
    email: value
  }
});

export const onPasswordChange = value => ({
  type: SET_PASSWORD,
  payload: {
    password: value
  }
});
