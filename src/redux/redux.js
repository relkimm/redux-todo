export function createStore(reducer) {
  let state = undefined;
  const listeners = new Set();

  function getState() {
    return state;
  }

  function subscribe(listener) {
    listeners.add(listener);

    return function unsubscribe() {
      if (listeners.has(listener)) {
        listeners.delete(listener);
      }
    };
  }

  function dispatch(action) {
    state = reducer(state, action);
    listeners.forEach((listener) => listener());
    return action;
  }

  return {
    getState,
    subscribe,
    dispatch,
  };
}

export function combineReducers(reducers) {
  const reducerKeys = Object.keys(reducers);

  return function combination(state = {}, action) {
    return reducerKeys.reduce((nextState, key) => {
      nextState[key] = reducers[key](state[key], action);
      return nextState;
    }, {});
  };
}
