import { handleActions } from 'redux-actions';
import * as consts from 'consts/action-types';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  requests: {
    global: 0
  }
});

export default handleActions({
  [consts.START_NETWORK]: (ui, { payload }) => ui.updateIn(['requests', payload || 'global'], counter => (counter || 0) + 1),
  [consts.END_NETWORK]: (ui, { payload }) => ui.updateIn(['requests', payload || 'global'], counter => counter - 1)
}, initialState);

export const getRequestsCount = (state, type = 'global') => state.ui.requests[type] || 0;