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

  function remove(id) {
    todos.splice(todos.indexOf(id), 1);
    localStorage.setItem("todo", JSON.stringify(todos));
  }

  return {
    add,
    get,
    remove,
  };
}

export const todoStorage = TodoStorage();
