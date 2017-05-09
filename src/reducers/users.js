import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import { ADD_USER, MERGE_USERS } from 'consts/action-types';

const initialState = Immutable({
  21: {
    id: 21,
    name: 'Body'
  },
  22: {
    id: 22,
    name: 'Stringer'
  },
  23: {
    id: 23,
    name: 'Marlo'
  }
});

export default handleActions({
  [ADD_USER]: (users, { payload }) => users.set(payload.id, payload),
  [MERGE_USERS]: (users, { payload }) => users.merge(payload)
}, initialState);