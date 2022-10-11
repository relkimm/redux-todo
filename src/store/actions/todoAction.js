export const addTodoAction = (todo) => {
  return {
    type: "todo/add",
    payload: todo,
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: "todo/delete",
    payload: id,
  };
};
