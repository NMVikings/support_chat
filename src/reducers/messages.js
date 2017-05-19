import { ADD_MESSAGE, ADD_MESSAGE_LIST } from '../actions';

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

  const standardizeDate = (item) => {
    return {
      ...item,
      date: new Date(item.date)
    }
  };

  return data.map(standardizeDate).sort(sortByDate).reduce(processDate, {});
};

const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const {role, date, image, name, content} = action;
      const dateId = action.date.toLocaleDateString();
      const message = {role, date, image, name, content};
      if (state[dateId] === undefined) {
        return {...state, [dateId]: {message}}
      } else {
        return {...state, [dateId]: [message, ...state[dateId]]}
      }
    }
    case ADD_MESSAGE_LIST:
      return processMessagesList([...state, ...action.messageList]);
    default:
      return state;
  }
};


export default messageReducer;