import React from 'react';
import { Route, Switch } from 'react-router';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { createBrowserHistory } from 'history'
import { configureStore, getDefaultMiddleware } from 'redux-starter-kit'
import { routerMiddleware } from 'connected-react-router'

import createRootReducer from 'rootReducer';

import Home from 'shared/components/Home';
import Navbar from 'shared/components/Navbar';
import LogIn from 'authentication/components/LogIn';
import SignUp from 'authentication/components/SignUp';
import NotFound from 'authentication/components/NotFound';

const history = createBrowserHistory();

const middleware = [...getDefaultMiddleware(), routerMiddleware(history)];

const reducer = createRootReducer(history);

const store = configureStore({
  reducer,
  devTools: true,
  middleware
});

const App = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <div>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={LogIn} />
          <Route path="/signup" component={SignUp} />
          <Route component={NotFound} />
        </Switch>
      </div>
    </ConnectedRouter>
  </Provider>
);

export default App;
