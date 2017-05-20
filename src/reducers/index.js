import { combineReducers } from 'redux';
import messages from './messages';
import input from './input';
import admin from './admin';
import tab from './tabs';

export default combineReducers({
  messages,
  input,
  admin,
  tab
});