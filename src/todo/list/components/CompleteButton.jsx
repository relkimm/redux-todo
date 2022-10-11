import React from "react";
import { completeTodoAction } from "../../../store/actions/todoAction";
import { useDispatch } from "../../../store/hooks/useDispatch";
import styles from "../style.module.css";

export default function CompleteButton({ id }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(completeTodoAction(id));
  };

  return (
    <button className={styles.button} type="submit" onClick={onClick}>
      완료
    </button>
  );
}
