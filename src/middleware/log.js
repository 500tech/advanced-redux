const actions = [];

window.onerror = () => {
  console.log('OH NO!');
  actions.forEach(console.log);
  return false;
};

const log = () => next => action => {
  console.log('Action: ' + action.type, action);

  actions.push(action);

  return next(action);
};

export default log;