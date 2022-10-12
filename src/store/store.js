import { combineReducers, createStore } from "../redux/redux";
import { todoReducer } from "./reducers/todoReducer";

const reducer = combineReducers({
  todo: todoReducer,
});

export const store = createStore(reducer);
