import { combineReducers } from 'redux';
import messages from './messages';
import sidebarReducer from './sidebar';
import roles from './roles';

export default combineReducers({
  sidebar: sidebarReducer,
  messages,
  roles
});