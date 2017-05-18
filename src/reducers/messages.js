import { ADD_MESSAGE, EDIT_MESSAGE, ADD_MESSAGE_LIST } from '../actions';

const processMessagesList = (data) => {
  const processDate = ({ date }) => {
    return date.split('.').reverse()
      .map((item, index) => {
        if (index === 1) {
          return String(Number(item) - 1)
        }
        return item;
      });
  };

  const processTime = ({ time }) => {
    return ['1970', '0', '1', ...time.split(':')];
  };

  const dataFilter = (obj1, obj2) => {
    const date1 = new Date(...processDate(obj1));
    const date2 = new Date(...processDate(obj2));

    if (date1 > date2) {
      return -1;
    }

    if (date1 < date2) {
      return 1
    }

    return 0;
  };

  const sortByTime = (message1, message2) => {
    const time1 = new Date(...processTime(message1)).getTime();
    const time2 = new Date(...processTime(message2)).getTime();

    if (time1 > time2) {
      return -1;
    }
    if (time1 < time2) {
      return 1;
    }
    return 0;
  };

  return data.sort(dataFilter).map((item) => item.messages.sort(sortByTime));
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