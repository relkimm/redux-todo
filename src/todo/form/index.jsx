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
    dispatch(addTodoAction("할 일은 오늘 끝내는게 좋습니다!"));
  };

  return (
    <form className={styles.todoForm} onSubmit={onSubmit}>
      <TodoInput />
      <AddButton />
    </form>
  );
}
