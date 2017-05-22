import reducer from './reducers';
import { createStore } from 'redux';
import './index.css';
import { addMessageList } from './actions'
import messages from './data/messages.json';
import { v4 } from 'uuid';

const configureStore = () => {
  const defaultState = {
    admin: {
      role: 'Admin',
      name: 'Maria',
      image: 'https://graph.facebook.com/100006276431900/picture?type=normal'
    },
    accounts: {
      '57890456': {
        percentage: 8,
        date: new Date(2017, 4, 8),
        currency: 'RUB',
        amount: 45897,
        is_open: false,
        operations: [
          {
            date: new Date(2017, 4, 19),
            text: "Пополнение с карты **** 0465",
            change: 3500,
            moneyDirection: true,
            id: v4()
          },
          {
            date: new Date(2017, 4, 17),
            text: "Списание на карту **** 0465",
            change: 6000,
            moneyDirection: false,
            id: v4()
          },
          {
            date: new Date(2017, 4, 18),
            text: "Начисление процентов",
            change: 700,
            moneyDirection: true,
            id: v4()
          },
        ]
      },
      '57894456': {
        percentage: 8,
        date: new Date(2017, 4, 8),
        currency: 'EUR',
        amount: 3687,
        is_open: false,
        operations: [
          {
            date: new Date(2017, 4, 19),
            text: "Пополнение с карты **** 0465",
            change: 3500,
            moneyDirection: true,
            id: v4()
          },
          {
            date: new Date(2017, 4, 17),
            text: "Списание на карту **** 0465",
            change: 6000,
            moneyDirection: false,
            id: v4()
          },
          {
            date: new Date(2017, 4, 18),
            text: "Начисление процентов",
            change: 700,
            moneyDirection: true,
            id: v4()
          },
        ]
      },
      '57890356': {
        name: 'На HolyJS',
        percentage: 8,
        date: new Date(2017, 4, 8),
        currency: 'USD',
        amount: 7898,
        is_open: false,
        operations: [
          {
            date: new Date(2017, 4, 19),
            text: "Пополнение с карты **** 0465",
            change: 3500,
            moneyDirection: true,
            id: v4()
          },
          {
            date: new Date(2017, 4, 17),
            text: "Списание на карту **** 0465",
            change: 6000,
            moneyDirection: false,
            id: v4()
          },
          {
            date: new Date(2017, 4, 18),
            text: "Начисление процентов",
            change: 700,
            moneyDirection: true,
            id: v4()
          },
        ]
      }
    },
    deposits: {
      '1234567890': {
        percentage: 8,
        date: new Date(2017, 4, 8),
        period: 6,
        currency: 'EUR',
        amount: 10000,
        is_open: false,
        insured: true,
      },
      '3452365738': {
        name: 'На макбук',
        is_open: false,
        percentage: 8,
        date: new Date(2017, 4, 8),
        period: 12,
        currency: 'USD',
        amount: 88000,
        insured: true
      },
      '2536326357': {
        name: 'На машину',
        is_open: false,
        percentage: 8,
        date: new Date(2017, 4, 8),
        period: 3,
        currency: 'RUB',
        amount: 25000,
        insured: true
      }
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

  store.dispatch(addMessageList(messages));

  return store;
};

export default configureStore;