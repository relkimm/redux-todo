export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "todo/add":
      return state.concat(action.payload);
    case "todo/delete":
      return state.slice(action.payload);
    default:
      return state;
  }
};
