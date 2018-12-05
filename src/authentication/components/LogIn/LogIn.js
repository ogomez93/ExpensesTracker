import React from 'react';

const LogIn = ({ onEmailChange, onPasswordChange, onSubmit, email, loggingIn, password }) => (
  <div>
    <h1>Login</h1>
    <form onSubmit={onSubmit}>
      <div className="inputGroup">
        <label htmlFor="Email">Email</label>
        <input type="email" value={email} onChange={onEmailChange} required={true} name="email" autoComplete="false" />
      </div>
      <div className="inputGroup">
        <label htmlFor="Password">Password</label>
        <input type="password" value={password} onChange={onPasswordChange} required={true} name="password"/>
      </div>
      <button type="submit">Submit</button>
      </form>
  </div>
);

export default LogIn;
