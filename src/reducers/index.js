import { combineReducers } from 'redux';
import messages from './messages';
import sidebarReducer from './sidebar';
import admin from './admin';

export default combineReducers({
  sidebar: sidebarReducer,
  messages,
  admin
});