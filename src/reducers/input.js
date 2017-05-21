import { ADD_MESSAGE, EDIT_MESSAGE } from '../actions';

const inputReducer = (state = '', action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return '';
    case EDIT_MESSAGE:
      return action.text;
    default:
      return state;
  }
};


export default inputReducer;