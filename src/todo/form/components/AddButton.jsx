import React from "react";
import styles from "../style.module.css";

export default function AddButton() {
  return (
    <button className={styles.addButton} type="submit">
      추가
    </button>
  );
}
