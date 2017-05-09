import { handleActions } from 'redux-actions';
import Immutable from 'seamless-immutable';

const initialState = Immutable(['Suziq', 'Kipi']);

export default handleActions({
  ADD_USER: (users, { name }) => users.concat(name)
}, initialState);