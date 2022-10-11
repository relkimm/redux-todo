let id = 0;

export const IdGenerator = () => {
  return ++id;
};

export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case "todo/add": {
      const newTodo = {
        id: IdGenerator(),
        text: action.payload,
      };
      return state.concat(newTodo);
    }
    case "todo/delete": {
      return state.filter((state) => state.id !== action.payload);
    }
    default:
      return state;
  }
};
