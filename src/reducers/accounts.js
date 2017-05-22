import { TOGGLE_OPERATIONS_LIST_VISIBILITY, ADD_DATA } from '../actions';
import { v4 } from 'uuid';


const toggleItemVisibility = (item) => {
  return {...item, is_open: !item.is_open }
};


const sortOperations = (operations) => operations.sort( (op1, op2) => {
  if (op1.date > op2.date) {
    return -1;
  } else if (op1.date < op2.date) {
    return 1;
  }
  return 0;
});

const processAccounts = ({ operations, date, ...account}) =>
  ({...account, date: new Date(date), operations: sortOperations(operations.map(({date, ...operation}) =>
    ({ ...operation, id: v4(), date: new Date(date)})
  ))});

const convertAccountsToObjects = (accounts) => {
  return accounts.map(processAccounts).reduce((acc, {id, ...account}) =>
    ({...acc, [id]: account}), {})
};

const accountReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA: {
      return convertAccountsToObjects(action.accounts);
    }
    case TOGGLE_OPERATIONS_LIST_VISIBILITY:
      if (action.typeOfList === 'deposits') {
        return state;
      }
      const id = action.id;
      return {...state, [id]: toggleItemVisibility(state[id])};
    default:
      return state;
  }
};

export default accountReducer;