//로딩화면
import React from "react";
import { useState, useEffect } from "react";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.loading}>
      <div className={styles.line}>
        <div className={styles.line1 }></div>
        <div className={styles.line2 }></div>
        <div className={styles.line3 }></div>
        <div className={styles.line4 }></div>
        <div className={styles.line5 }></div>
        <div className={styles.line6 }></div>
      </div>
    </div>
  );
}

export default Loading;
