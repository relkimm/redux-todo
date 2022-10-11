import React from "react";
import DeleteButton from "./DeleteButton";
import CompleteButton from "./CompleteButton";
import styles from "../style.module.css";

export default function TodoItem({ todo }) {
  const completedStyle = todo.completed ? styles.completed : "";

  return (
    <li className={styles.todoItem}>
      <p className={`${styles.todoText} ${completedStyle}`}>{todo.text}</p>
      <div>
        <CompleteButton id={todo.id} />
        <DeleteButton id={todo.id} />
      </div>
    </li>
  );
}
