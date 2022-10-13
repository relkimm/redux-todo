import { combineReducers, createStore } from "../redux/redux";
import { todoReducer } from "./reducers/todoReducer";

const reducer = combineReducers({
  todo: todoReducer,
});

const preloadedState = {
  todo: localStorage.getItem("todo"),
};

export const store = createStore(reducer, preloadedState);
