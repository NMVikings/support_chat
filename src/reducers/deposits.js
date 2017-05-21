import { TOGGLE_OPERATIONS_LIST_VISIBILITY } from '../actions';

const depositReducer = (state = [], action) => {
  switch (action.type) {
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