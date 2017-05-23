import { combineReducers } from 'redux';
import depositsReducer, * as deposits from './deposits';
import tabsReducer from './tabs';
import accountsReducer, * as accounts from './accounts';

/* SELECTORS */
const getPropsForItem = (state, tab, id) => {
  if (tab === 'accounts') {
    return accounts.getPropsForItem(state.accounts, tab, id);
  } else if (tab === 'deposits') {
    return deposits.getPropsForItem(state.deposits, tab, id);
  }
};
const getKeys = (state) => {
  if (state.activeTab === 'accounts') {
    return accounts.getKeys(state.accounts);
  } else if (state.activeTab === 'deposits') {
    return deposits.getKeys(state.deposits);
  }
};
const getActiveAccountOperations = (state) => {
  return accounts.getActiveAccountOperations(state.accounts);
};
const getOperation = (state, data) => {
  return accounts.getOperation(state.accounts, data);
};
const getSidebarData = (state) => {
  return ({
    keys: getKeys(state),
    isAccountTabActive: state.activeTab === 'accounts',
    activeId: accounts.getActiveAccountId(state.accounts),
    activeTab: state.activeTab
  })
};
const getActiveAccountId = (state) => {
  return accounts.getActiveAccountId(state.accounts);
};
/* SELECTORS */

export default combineReducers({
  deposits: depositsReducer,
  activeTab: tabsReducer,
  accounts: accountsReducer
})

export {
  getPropsForItem,
  getKeys,
  getActiveAccountOperations,
  getOperation,
  getSidebarData,
  getActiveAccountId
}