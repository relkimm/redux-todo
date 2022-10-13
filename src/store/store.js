import { todoStorage } from "../infra/storage/todoStorage";
import { combineReducers, createStore } from "../redux/redux";
import { todoReducer } from "./reducers/todoReducer";

const reducer = combineReducers({
  todo: todoReducer,
});

const preloadedState = {
  todo: todoStorage.get(),
};

export const store = createStore(reducer, preloadedState);
