import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import user from './user/reducers';
import authentication from './authentication/reducers';

export default history => combineReducers({
  router: connectRouter(history),
  authentication,
  user
});
