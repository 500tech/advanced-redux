import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import { ADD_BOOK, MERGE_BOOKS } from 'consts/action-types';

const initialState = Immutable([
  {
    name: 'Die Slowly',
    user: 'Germany'
  },
  {
    user: 'Israel',
    name: 'Hard nut'
  },
  {
    name: 'The Glass Trap',
    user: 'Poland'
  }
]);

export default handleActions({
  [ADD_BOOK]: (books, { payload: { name, user } }) => books.concat({ name, user }),
  [MERGE_BOOKS]: (books, { payload }) => Immutable(payload)
}, initialState);