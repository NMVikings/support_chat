import { combineReducers } from 'redux';
import messages from './messages';
import admin from './admin';
import tab from './tabs';

export default combineReducers({
  messages,
  admin,
  tab
});