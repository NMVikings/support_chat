import React from 'react';
import App from './App/App';
import AccountPage from './Pages/AccountPage';
import DepositPage from './Pages/DepositPage';
import OperationPage from './Pages/OperationPage';
import { Provider } from 'react-redux';
import {  Route, HashRouter } from 'react-router-dom';


const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <div>
        <Route path={"/accounts/:id"} component={AccountPage} />
        <Route path={"/deposits/:id"} component={DepositPage} />
        <Route path={"/operations/:itemId/:operationId"} component={OperationPage} />
        <Route exact path={"/"} component={App} />
      </div>
    </HashRouter>
  </Provider>
);

export default Root;