const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_TAB = 'CHANGE_TAB';
const TOGGLE_OPERATIONS_LIST_VISIBILITY = 'TOGGLE_OPERATIONS_LIST_VISIBILITY';
// const ADD_ITEMS_LIST = 'ADD_ITEMS_LIST';
// const ADD_OPERATIONS_TO_ITEM = 'ADD_OPERATIONS_TO_ITEM';
const ADD_DATA = 'ADD_DATA';

const addMessage = ( message ) => ({
  type: ADD_MESSAGE,
  date: new Date(),
  ...message
});

const changeTab = (tab) => ({
    type: CHANGE_TAB,
    tab
});

const toggleOperationListVisibility = (id) => ({
  type: TOGGLE_OPERATIONS_LIST_VISIBILITY,
  id
});

// const addItemsList = (typeOfList, list) => ({
//     type: ADD_ITEMS_LIST,
//     typeOfList,
//     list
// });
//
// const addOperationsToItem = (typeOfList, id, operations) => ({
//     type: ADD_OPERATIONS_TO_ITEM,
//     typeOfList,
//     id,
//     operations
// });

const addData = ({ messages, deposits, accounts }) => ({
    type: ADD_DATA,
    messages,
    deposits,
    accounts
});


export {
  addMessage,
  changeTab,
  toggleOperationListVisibility,
  // addItemsList,
  // addOperationsToItem,
  addData,
  ADD_MESSAGE,
  CHANGE_TAB,
  TOGGLE_OPERATIONS_LIST_VISIBILITY,
  ADD_DATA
}