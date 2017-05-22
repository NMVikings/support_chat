import { TOGGLE_OPERATIONS_LIST_VISIBILITY, ADD_DATA } from '../actions';

const processDeposits = ({ operations, date, ...account}) =>
  ({ ...account, date: new Date(date) });

const convertDepositsToObjects = (accounts) => {
  return accounts.map(processDeposits).reduce((acc, {id, ...account}) =>
    ({ ...acc, [id]: account }), {})
};

const depositReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA: {
      return convertDepositsToObjects(action.deposits);
    }
    case TOGGLE_OPERATIONS_LIST_VISIBILITY:
      if (action.typeOfList === 'accounts') {
        return state;
      }
      const id = action.id;
      return {...state, [id]: {...state[id], is_open: !state[id].is_open}};
    default:
      return state;
  }
};

export default depositReducer;