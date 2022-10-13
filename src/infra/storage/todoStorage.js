function TodoStorage() {
  const todoString = localStorage.getItem("todo");
  const todos = todoString !== null ? JSON.parse(todoString) : [];

  function add(newTodo) {
    todos.push(newTodo);
    localStorage.setItem("todo", JSON.stringify(todos));
  }

  function get() {
    return todos;
  }

  function update(updateTodo) {
    const next = todos.map((todo) => {
      if (todo.id === updateTodo.id) {
        return updateTodo;
      }
      return todo;
    });
  }

  function remove(id) {
    const next = todos.filter((todo) => todo.id !== id);
    todos = next;
    localStorage.setItem("todo", JSON.stringify(todos));
  }

  return {
    add,
    get,
    remove,
  };
}

export const todoStorage = TodoStorage();
