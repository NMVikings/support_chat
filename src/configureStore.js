import reducer from './reducers';
import { createStore } from 'redux';
import './index.css';
import { addData } from './actions'
import data from './data/data.json';

const configureStore = () => {
  const defaultState = {
    admin: {
      role: 'Admin',
      name: 'Maria',
      image: 'https://graph.facebook.com/100006276431900/picture?type=normal'
    }
  };

  const addLoggingToDispatch = (store) => {
    const rawDispatch = store.dispatch;
    if (console.group === undefined) {
      return rawDispatch
    }

    return (action) => {
      console.group(action.type);
      console.log('%c prev state', 'color: gray',  store.getState());
      console.log('%c action',  'color: blue', action);
      const returnValue = rawDispatch(action);
      console.log('%c next state', 'color: green', store.getState());
      console.groupEnd(action.type);
      return returnValue;
    }
  };

  const store = createStore(reducer, defaultState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

  if (process.env.NODE_ENV !== 'production') {
    store.dispatch = addLoggingToDispatch(store)
  }

  store.dispatch(addData(data));

  return store;
};

export default configureStore;