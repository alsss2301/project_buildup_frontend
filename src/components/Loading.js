//로딩화면
import React from "react";
import { useState, useEffect } from "react";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.line1 + "hidden"}></div>
      <div className={styles.line2 + "hidden"}></div>
      <div className={styles.line3 + "hidden"}></div>
      <div className={styles.line4 + "hidden"}></div>
      <div className={styles.line5 + "hidden"}></div>
      <div className={styles.line6 + "hidden"}></div>
    </div>
  );
}

export default Loading;
