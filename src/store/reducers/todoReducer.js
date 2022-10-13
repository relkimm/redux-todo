import { todoStorage } from "../../infra/storage/todoStorage";

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
        completed: false,
      };
      todoStorage.add(newTodo);
      return state.concat(newTodo);
    }
    case "todo/delete": {
      todoStorage.remove(action.payload);
      return state.filter((state) => state.id !== action.payload);
    }
    case "todo/complete": {
      return state.map((item) => {
        if (item.id === action.payload) {
          item.completed = true;
          todoStorage.update(item);
        }
        return item;
      });
    }
    case "todo/cancel": {
      return state.map((item) => {
        if (item.id === action.payload) {
          item.completed = false;
          todoStorage.update(item);
        }
        return item;
      });
    }
    default:
      return state;
  }
};
