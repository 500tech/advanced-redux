import { combineReducers } from 'redux';
import users from './users';
import books from './books';
import ui from './ui';

export default combineReducers({
  users,
  books,
  ui
});