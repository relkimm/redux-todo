function TodoStorage() {
  const todoString = localStorage.getItem("todo");
  let todos = todoString !== null ? JSON.parse(todoString) : [];

  function add(newTodo) {
    todos = todos.concat(newTodo);
    localStorage.setItem("todo", JSON.stringify(todos));
  }

  function get() {
    return todos;
  }

  function update(updateTodo) {
    todos = todos.map((todo) => {
      if (todo.id === updateTodo.id) {
        return updateTodo;
      }
      return todo;
    });
    localStorage.setItem("todo", JSON.stringify(todos));
  }

  function remove(id) {
    todos = todos.filter((todo) => todo.id !== id);
    localStorage.setItem("todo", JSON.stringify(todos));
  }

  return {
    add,
    get,
    update,
    remove,
  };
}

export const todoStorage = TodoStorage();
