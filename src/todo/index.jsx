import React from "react";
import TodoTitle from "./title";
import TodoForm from "./form";
import TodoList from "./list";
import styles from "./style.module.css";

export default function Todo() {
  return (
    <div className={styles.todo}>
      <TodoTitle />
      <TodoForm />
      <TodoList />
    </div>
  );
}
