import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';
import { ADD_USER } from 'consts/action-types';

const initialState = Immutable(['Suziq', 'Kipi']);

export default handleActions({
  [ADD_USER]: (users, { payload }) => users.concat(payload)
}, initialState);