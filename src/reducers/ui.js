import { handleActions } from 'redux-actions';
import * as consts from 'consts/action-types';
import Immutable from 'seamless-immutable';

const initialState = Immutable({
  requests: {
    global: 0
  },
  lists: {
  }
});

export default handleActions({
  [consts.START_NETWORK]: (ui, { payload }) => ui.updateIn(['requests', payload || 'global'], counter => (counter || 0) + 1),
  [consts.END_NETWORK]: (ui, { payload }) => ui.updateIn(['requests', payload || 'global'], counter => counter - 1),
  [consts.SET_LIST]: (ui, { payload }) => ui.setIn(['lists', payload.name], payload.list)
}, initialState);

export const getRequestsCount = (state, type = 'global') => state.ui.requests[type] || 0;

export const getList = (state, name) => (state.ui.lists[name] || []);