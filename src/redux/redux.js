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
