import { API } from 'consts/action-types';
import { startNetwork, endNetwork } from 'actions/ui';
import { normalize as normalizeLib } from 'normalizr';

const api = ({ dispatch }) => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  const { url, success, name, preProcess, normalize } = action.payload;

  dispatch(startNetwork(name));

  fetch(url)
    .then(response => response.json())
    .then(data => {
      if (preProcess) {
        data = preProcess(data);
      }

      if (normalize) {
        data = normalizeLib(data, normalize)
      }

      dispatch(success(data));
      dispatch(endNetwork(name));
    })
};

export default api;