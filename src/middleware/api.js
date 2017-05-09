import { API } from 'consts/action-types';
import { startNetwork, endNetwork } from 'actions/ui';

const api = ({ dispatch }) => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  const { url, success, name } = action.payload;

  dispatch(startNetwork(name));

  fetch(url)
    .then(response => response.json())
    .then(data => {
      dispatch(success(data));
      dispatch(endNetwork(name));
    })
};

export default api;