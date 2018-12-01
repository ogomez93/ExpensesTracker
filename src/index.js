import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

ReactDOM.render( < App / > , document.getElementById('root'));

const getUsers = async () => {
  try {
    let response = await fetch('http://localhost:3000/api/v1/users');
    let users = await response.json();
    console.log(users);
  } catch (err) {
    console.log(err);
  }
};

getUsers();

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();