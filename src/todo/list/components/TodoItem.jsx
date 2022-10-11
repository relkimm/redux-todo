import React from "react";
import DeleteButton from "./DeleteButton";
import CompleteButton from "./CompleteButton";
import styles from "../style.module.css";
import CancelButton from "./CancelButton";

export default function TodoItem({ todo }) {
  const completedStyle = todo.completed ? styles.completed : "";

  return (
    <li className={styles.todoItem}>
      <p className={`${styles.todoText} ${completedStyle}`}>{todo.text}</p>
      <div>
        {!todo.completed && <CompleteButton id={todo.id} />}
        {todo.completed && <CancelButton id={todo.id} />}
        <DeleteButton id={todo.id} />
      </div>
    </li>
  );
}
