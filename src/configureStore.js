import reducer from './reducers';
import { createStore } from 'redux';
import './index.css';
import { addMessageList } from './actions'
import messages from './data/messages.json';

const configureStore = () => {
  const defaultState =  {
    admin: {
      role: 'Admin',
      name: 'Мария',
      image: 'https://graph.facebook.com/100006276431900/picture?type=normal'
    },
  };

  const store = createStore(reducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
  store.dispatch(addMessageList(messages));


  return store;
};

export default configureStore;