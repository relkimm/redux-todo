import { createStore } from "../redux/redux";
import { todoReducer } from "./reducers/todoReducer";

export const store = createStore(todoReducer);
