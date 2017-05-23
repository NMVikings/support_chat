import { TOGGLE_OPERATIONS_LIST_VISIBILITY, ADD_DATA } from '../actions';
import { v4 } from 'uuid';
import { combineReducers } from 'redux';

/* PROCESSING INCOMING DATE */
const sortOperations = (operations) => operations.sort((op1, op2) => {
  if (op1.date > op2.date) {
    return -1;
  } else if (op1.date < op2.date) {
    return 1;
  }
  return 0;
});
const processAccounts = ({ operations, date, ...account}) => ({
  ...account,
  date: new Date(date),
  operations: sortOperations(operations.map(({ date, ...operation }) =>
    ({ ...operation, id: v4(), date: new Date(date) })
  ))
});
const convertAccountsToObjects = (accounts) => {
  return accounts.map(processAccounts).reduce((acc, {id, ...account}) =>
    ({...acc, [id]: account}), {})
};
/* PROCESSING INCOMING DATE */


/* REDUCERS */
const accountReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA: {
      return convertAccountsToObjects(action.accounts);
    }
    default:
      return state;
  }
};
const activeAccountId = (state = '', action) => {
  switch (action.type) {
    case TOGGLE_OPERATIONS_LIST_VISIBILITY:
      return action.id === state ? '' : action.id;
    default:
      return state;

  }
};
/* REDUCERS */


/* SELECTORS */
const getActiveAccountId = ({ activeAccountId }) => {
  return activeAccountId;
};
const getKeys = ({ accounts }) => {
  return Object.keys(accounts);
};
const getActiveAccountOperations = ({ accounts, activeAccountId }) =>{
  return accounts[activeAccountId].operations;
};
const getPropsForItem = ({ accounts, activeAccountId }, tab, id) => {
  const { name, amount, currency, percentage, date, operations } = accounts[id];
  const is_open = activeAccountId === id;
  const lastOperation = operations[0];
  const title = (name === undefined) ? (tab === 'accounts') ? `Счет № ${id}` : `Вклад № ${id}` : name;
  const propsForHeader = {
    id,
    tab,
    title,
    amount,
    currency,
    is_open
  };
  const propsForFooter = {
    percentage,
    date: date.toLocaleDateString(),
    time: date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
    lastOperation: {
      ...lastOperation,
      date: lastOperation.date.toLocaleDateString(),
      time: lastOperation.date.toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'}),
      classString: `change ${lastOperation.moneyDirection ? 'change_positive' : 'change_negative'}`,
      sign: lastOperation.moneyDirection ? '+' : '-',
    },
    is_open,
    currency
  };
  const propsForLink = {
    tab,
    id
  };
  // { id, tab, title, amount, currency, is_open } to Header
  // { percentage, date, lastOperation, is_open } to Footer
  return {
    propsForHeader,
    propsForFooter,
    propsForLink
  }
};
const getOperation = ({ accounts }, { itemId, operationId }) => {
  return accounts[itemId].operations.filter(operation => operation.id === operationId)[0];
};
/* SELECTORS */



export default combineReducers({
  accounts: accountReducer,
  activeAccountId
});

export {
  getActiveAccountId,
  getKeys,
  getActiveAccountOperations,
  getPropsForItem,
  getOperation
};