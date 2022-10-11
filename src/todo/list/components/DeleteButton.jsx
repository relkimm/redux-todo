import React from "react";
import { deleteTodoAction } from "../../../store/actions/todoAction";
import { useDispatch } from "../../../store/hooks/useDispatch";
import styles from "../style.module.css";

export default function DeleteButton(props) {
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(deleteTodoAction(props.id));
  };

  return (
    <button className={styles.deleteButton} onClick={onClick}>
      삭제
    </button>
  );
}
