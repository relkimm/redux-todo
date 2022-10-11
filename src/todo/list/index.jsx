import React from "react";
import { useSelector } from "../../store/hooks/useSelector";
import TodoItem from "./components/TodoItem";
import styles from "./style.module.css";

export default function TodoList() {
  const todoList = useSelector((state) => state);

  return (
    <ul className={styles.todoList}>
      {todoList.map((todo, idx) => (
        <TodoItem key={`${todo.id}_${idx}`} todo={todo} />
      ))}
    </ul>
  );
}
