import { ADD_BOOK } from 'consts/action-types';

export const addBook = (name, user) => ({
  type: ADD_BOOK,
  payload: { name, user }
});