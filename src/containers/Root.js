import React from 'react';
import App from './App/App';
import AccountPage from './pages/AccountPage';
import DepositPage from './pages/DepositPage';
import OperationPage from './pages/OperationPage';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router-dom';
import createBrowserHistory from 'history/createBrowserHistory'


const Root = ({ store }) => (
  <Provider store={store}>
    <Router history={createBrowserHistory()}>
      <div>
        <Route path="/chat" component={App} />
        <Route path="/accounts/:id" component={AccountPage} />
        <Route path="/deposits/:id" component={DepositPage} />
        <Route path="/operations/:itemId/:operationId" component={OperationPage} />
      </div>
    </Router>
  </Provider>
);

export default Root;