import { ADD_MESSAGE, EDIT_MESSAGE, ADD_MESSAGE_LIST } from '../actions';

const processMessagesList = (data) => {
  const processDate = (newData, item) => {
    const fullDate = new Date(item.date).toLocaleDateString();
    if (newData[fullDate] === undefined) {
      return {...newData, [fullDate]: [item]}
    } else {
      return {...newData, [fullDate]: [...newData[fullDate], item]}
    }
  };

  const sortByDate = (data1, data2) => {
    const date1 = new Date(data1.date);
    const date2 = new Date(data2.date);

    if (date1 > date2) {
      return -1;
    }
    if (date1 < date2) {
      return 1;
    }
    return 0;
  };

  return data.sort(sortByDate).reduce(processDate, {});
};

const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return state;
    case EDIT_MESSAGE:
      return state;
    case ADD_MESSAGE_LIST:
      return processMessagesList([...state, ...action.messageList]);
    default:
      return state;
  }
};


export default messageReducer;