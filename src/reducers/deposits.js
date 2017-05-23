import { ADD_DATA } from '../actions';

const convertDepositsToObjects = (accounts) => {
  const processDeposits = ({ operations, date, ...account}) =>
    ({ ...account, date: new Date(date) });

  return accounts.map(processDeposits).reduce((acc, {id, ...account}) =>
    ({ ...acc, [id]: account }), {})
};

const depositReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_DATA: {
      return convertDepositsToObjects(action.deposits);
    }
    default:
      return state;
  }
};

const getKeys = ( deposits ) => Object.keys(deposits);
const getPropsForItem = (deposits , tab, id) => {
  const { name, amount, currency, percentage, date } = deposits[id];
  const is_open = false;
  const lastOperation = null;
  const title = (name === undefined) ? (tab === 'accounts') ? `Счет № ${id}` : `Вклад № ${id}` : name;
  const propsForHeader = {
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
    lastOperation,
    is_open
  };
  // { id, name, amount, currency, is_open } to Header
  // { percentage, date, lastOperation, is_open } to Footer
  return {
    propsForHeader,
    propsForFooter
  }
};


export {
  getKeys,
  getPropsForItem
}


export default depositReducer;