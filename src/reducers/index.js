import { combineReducers } from 'redux';
import messages from './messages';

const def = (state = {}, action) => {
  return state;
};

export default combineReducers({
  messages,
  def
});