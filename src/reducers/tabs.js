import { CHANGE_TAB } from '../actions';

const tabReducer = (state = 'accounts', action) => {
  switch (action.type) {
    case CHANGE_TAB:
      return action.tab;
    default:
      return state;
  }
};

export default tabReducer;
