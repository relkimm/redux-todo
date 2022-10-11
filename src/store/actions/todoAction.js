export const addTodoAction = (text) => {
  return {
    type: "todo/add",
    payload: text,
  };
};

export const deleteTodoAction = (id) => {
  return {
    type: "todo/delete",
    payload: id,
  };
};
