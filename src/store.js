import { createStore, applyMiddleware } from 'redux';
import reducer from 'reducers/root';
import logMiddleware from 'middleware/log';
import debounceMiddleware from 'middleware/debounce';
import thunkMiddleware from 'middleware/thunk';
import apiMiddleware from 'middleware/api';
import multiMiddleware from 'middleware/multi';

window.store = createStore(reducer, applyMiddleware(
  thunkMiddleware,
  multiMiddleware,
  debounceMiddleware,
  logMiddleware,
  apiMiddleware
));

export default window.store;