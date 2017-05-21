import { combineReducers } from 'redux';
import accounts from './accounts';
import deposits from './deposits';
import messages from './messages';
import admin from './admin';
import tab from './tabs';

export default combineReducers({
  accounts,
  deposits,
  messages,
  admin,
  tab
});

const getKeys = (state) => {
  return Object.keys(state[state.tab])
};

const getPropsForItem = (state, id) => {
  return {
    ...state[state.tab][id],
    tab: state.tab
  }
};

const getActiveId = (state) => {
  const activeTab = state[state.tab];
  return getKeys(state).filter(key => activeTab[key].is_open)
};

const getItemOperations = (state, id) => {
  return {
    operations: state[state.tab][id].operations
  }
};

export {
  getKeys,
  getPropsForItem,
  getActiveId,
  getItemOperations
}