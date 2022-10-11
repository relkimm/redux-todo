import React from "react";
import AddButton from "./components/AddButton";
import TodoInput from "./components/TodoInput";
import styles from "./style.module.css";

export default function TodoForm() {
  return (
    <form className={styles.todoForm}>
      <TodoInput />
      <AddButton />
    </form>
  );
}
