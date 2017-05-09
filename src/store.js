import { createStore } from 'redux';
import reducer from 'reducers/root';

window.store = createStore(reducer);

export default window.store;