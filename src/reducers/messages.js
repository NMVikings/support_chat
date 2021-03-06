import { ADD_MESSAGE, ADD_DATA } from '../actions';

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
const addMessageToState = (state, action) => {
  const {type, ...message} = action;
  const dateId = message.date.toLocaleDateString();
  if (state[dateId] === undefined) {
    return {[dateId]: [message], ...state}
  } else {
    return {...state, [dateId]: [message, ...state[dateId]]}
  }
};


const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      return addMessageToState(state, action);
    }
    case ADD_DATA:
      return processMessagesList([...action.messages]);
    default:
      return state;
  }
};


export default messageReducer;