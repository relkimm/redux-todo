import React from "react";
import DeleteButton from "./DeleteButton";
import styles from "../style.module.css";
import CompleteButton from "./CompleteButton";

export default function TodoItem({ todo }) {
  return (
    <li className={styles.todoItem}>
      <p className={styles.todoText}>{todo.text}</p>
      <div>
        <CompleteButton id={todo.id} />
        <DeleteButton id={todo.id} />
      </div>
    </li>
  );
}
