import React from 'react';
import ReactDOM from 'react-dom';
import App from './containers/App/App';
import './index.css';
import reducer from './reducers';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import { addMessageList } from './actions'
import messages from './data/messages.json';

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
store.dispatch(addMessageList(messages));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
