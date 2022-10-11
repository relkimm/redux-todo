import React from "react";
import DeleteButton from "./DeleteButton";
import styles from "../style.module.css";

export default function TodoItem({ todo }) {
  return (
    <li className={styles.todoItem}>
      <p className={styles.todoText}>{todo.text}</p>
      <DeleteButton id={todo.id} />
    </li>
  );
}
