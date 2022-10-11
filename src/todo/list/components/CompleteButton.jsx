import React from "react";
import styles from "../style.module.css";

export default function CompleteButton({ id }) {
  return (
    <button className={styles.button} type="submit">
      완료
    </button>
  );
}
