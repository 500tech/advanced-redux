import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import { ADD_BOOK, MERGE_BOOKS } from 'consts/action-types';

const initialState = Immutable({
  10: {
    id: 10,
    name: 'Die Slowly',
    user: 21
  },
  11: {
    id: 11,
    name: 'Hard nut',
    user: 22
  },
  12: {
    id: 12,
    name: 'The Glass Trap',
    user: 23
  }
});

export default handleActions({
  [ADD_BOOK]: (books, { payload }) => books.set(payload.id, payload),
  [MERGE_BOOKS]: (books, { payload }) => books.merge(payload)
}, initialState);