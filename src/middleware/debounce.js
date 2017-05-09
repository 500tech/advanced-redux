const pending = {};

const debounce = () => next => action => {
  const { meta } = action;

  if (!meta || !meta.debounce) {
    return next(action);
  }

  if (pending[action.type]) {
    clearTimeout(pending[action.type]);
  }

  pending[action.type] = setTimeout(() => {
    delete pending[action.type];
    next(action);
  }, meta.debounce);
};

export default debounce;