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

const isEmpty = ({ content }) => {
  return content.length === 0;
};

const createMessage = (action) => {
  const {type, content, ...message} = action;

  return {content: content.trim(), ...message};
};

const messageReducer = (state = {}, action) => {
  switch (action.type) {
    case ADD_MESSAGE: {
      const message = createMessage(action);
      const dateId = message.date.toLocaleDateString();

      if (isEmpty(message)) {
        return state;
      }
      if (state[dateId] === undefined) {
        return {[dateId]: [message], ...state}
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