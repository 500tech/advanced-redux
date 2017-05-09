import { createStore, applyMiddleware } from 'redux';
import reducer from 'reducers/root';
import logMiddleware from 'middleware/log';
import debounceMiddleware from 'middleware/debounce';

window.store = createStore(reducer, applyMiddleware(
  debounceMiddleware,
  logMiddleware
));

export default window.store;