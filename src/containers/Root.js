import React from 'react';
import App from './App/App';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import createBrowserHistory from 'history/createBrowserHistory'


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App} />
    </Router>
  </Provider>
);

export default Root;