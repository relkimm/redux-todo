import React from "react";
import TodoItem from "./components/TodoItem";
import styles from "./style.module.css";

export default function TodoList() {
  return (
    <ul className={styles.todoList}>
      <TodoItem />
    </ul>
  );
}
