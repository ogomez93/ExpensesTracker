import { SET_USER } from './actionTypes';

export const setUser = ({ name, last_name, phone_number, email, username }) => ({
  type: SET_USER,
  payload: {
    user: {
      email,
      name,
      username,
      lastName: last_name,
      phoneNumber: phone_number
    }
  }
});
