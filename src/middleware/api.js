import { API } from 'consts/action-types';

const api = ({ dispatch }) => next => action => {
  if (action.type !== API) {
    return next(action);
  }

  const { url, success } = action.payload;

  fetch(url)
    .then(response => response.json())
    .then(data => {
      dispatch(success(data));
    })
};

export default api;