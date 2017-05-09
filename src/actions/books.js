import * as consts from 'consts/action-types';
import { createAction } from 'redux-actions';
import { mergeUsers } from 'actions/users';

export const addBook = (name, user) => ({
  type: consts.ADD_BOOK,
  payload: { name, user }
});

export const mergeBooks = createAction(consts.MERGE_BOOKS);

export const fetchBooks = () => ({
  type: consts.API,
  payload: {
    url: 'simple/books.json',
    success: data => [
      mergeUsers(data.map(book => book.user )),
      mergeBooks(data)
    ],
    name: 'books'
  }
});