import { combineReducers } from 'redux';
import users from './users';
import books from './books';

export default combineReducers({
  users,
  books
});