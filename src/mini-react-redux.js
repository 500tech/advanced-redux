import store from 'store';
import React from 'react';

const shallowEqual = (objA, objB) => {
  if (Object.keys(objA).length !== Object.keys(objB).length) {
    return false;
  }

  for (let key of Object.keys(objA)) {
    if (objA[key] !== objB[key]) {
      return false;
    }
  }

  return true;
};

export const connect = (mapStateToProps, mapDispatchToProps) => Component =>
  class extends React.Component {
    constructor() {
      super();

      this.state = {};

      if (mapStateToProps) {
        store.subscribe(this.update.bind(this));
        Object.assign(this.state, mapStateToProps(store.getState()));
      }

      if (mapDispatchToProps) {
        Object.assign(this.state, mapDispatchToProps(store.dispatch));
      }
    }

    update() {
      this.setState(mapStateToProps(store.getState()));
    }

    shouldComponentUpdate(nextProps, nextState) {
      return !shallowEqual(nextState, this.state);
    }

    render() {
      console.log(`Render: ${ Component.name }`);
      return <Component { ...this.state }/>
    }
  };

