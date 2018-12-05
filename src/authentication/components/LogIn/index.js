import { connect } from 'react-redux';
import LogIn from './LogIn';
import { onEmailChange, onPasswordChange, tryToLogIn } from 'authentication/actions';

const mapStateToProps = ({ authentication: { email, loggingIn, password } }) => ({
  email,
  loggingIn,
  password
});

const mapDispatchToProps = dispatch => ({
  onEmailChange: ({ target: { value } }) => dispatch(onEmailChange(value)),
  onPasswordChange: ({ target: { value } }) => dispatch(onPasswordChange(value)),
  onSubmit: event => {
    event.preventDefault();
    if (event.target.checkValidity()) return dispatch(tryToLogIn());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
