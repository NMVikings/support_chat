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
  return getKeys(state).filter(key => activeTab[key].is_open)[0] || ''
};

const getItemOperations = (state, id) => {
  return {
    operations: state[state.tab][id].operations
  }
};

const getOperation = (state, { tab, itemId, operationId }) => {
  const operations = state[tab][itemId].operations;
  return operations.filter(e => e.id === operationId)[0];
};

export {
  getKeys,
  getPropsForItem,
  getActiveId,
  getItemOperations,
  getOperation
}