import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import { ADD_USER, MERGE_USERS } from 'consts/action-types';

const initialState = Immutable(['Suziq', 'Kipi']);

export default handleActions({
  [ADD_USER]: (users, { payload }) => users.concat(payload),
  [MERGE_USERS]: (users, { payload }) => Immutable(Array.from(new Set(users.concat(payload))))
}, initialState);