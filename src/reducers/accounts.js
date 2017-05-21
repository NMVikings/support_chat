import { TOGGLE_OPERATIONS_LIST_VISIBILITY } from '../actions';

const accountReducer = (state = [], action) => {
  switch (action.type) {
    case TOGGLE_OPERATIONS_LIST_VISIBILITY:
      if (action.typeOfList === 'deposits') {
        return state;
      }
      const id = action.id;
      return {...state, [id]: {...state[id], is_open: !state[id].is_open}};
    default:
      return state;
  }
};

export default accountReducer;