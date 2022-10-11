import React from "react";
import { addTodoAction } from "../../store/actions/todoAction";
import { useDispatch } from "../../store/hooks/useDispatch";
import AddButton from "./components/AddButton";
import TodoInput from "./components/TodoInput";
import styles from "./style.module.css";

export default function TodoForm() {
  const dispatch = useDispatch();

  const onSubmit = (event) => {
    event.preventDefault();
    const text = event.target["todo"].value;
    dispatch(addTodoAction(text));
    event.target["todo"].value = "";
  };

  return (
    <form className={styles.todoForm} onSubmit={onSubmit}>
      <TodoInput />
      <AddButton />
    </form>
  );
}
