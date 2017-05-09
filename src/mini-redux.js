export const createStore = (reducer, initialState) => {
  let state = initialState;
  let cbs = [];

  return {
    getState() {
      return state;
    },

    dispatch(action) {
      state = reducer(state, action);

      cbs.forEach(cb => cb());
    },

    subscribe(cb) {
      cbs.push(cb);

      return () => {
        cbs = cbs.filter(i => i !== cb);
      }
    }
  }
};
