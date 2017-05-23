import React from 'react';
import App from './App/App';
import AccountPage from './Pages/AccountPage';
import DepositPage from './Pages/DepositPage';
import OperationPage from './Pages/OperationPage';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';


const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <div>
        <Route path={process.env.PUBLIC_URL + "/accounts/:id"} component={AccountPage} />
        <Route path={process.env.PUBLIC_URL + "/deposits/:id"} component={DepositPage} />
        <Route path={process.env.PUBLIC_URL + "/operations/:itemId/:operationId"} component={OperationPage} />
        <Route exact path={process.env.PUBLIC_URL + "/"} component={App} />
      </div>
    </Router>
  </Provider>
);

export default Root;