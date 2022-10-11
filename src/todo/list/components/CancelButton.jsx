import React from "react";
import { cancelTodoAction } from "../../../store/actions/todoAction";
import { useDispatch } from "../../../store/hooks/useDispatch";
import styles from "../style.module.css";

export default function CancelButton({ id }) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(cancelTodoAction(id));
  };

  return (
    <button className={styles.button} onClick={onClick}>
      취소
    </button>
  );
}
