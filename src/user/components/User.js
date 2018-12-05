import React from 'react';

const User = ({ name, lastName, email, phoneNumber, username }) => (
  <ul>
    <li>{name}</li>
    <li>{lastName}</li>
    <li>{email}</li>
    <li>{phoneNumber}</li>
    <li>{username}</li>
  </ul>
)

export default User;
