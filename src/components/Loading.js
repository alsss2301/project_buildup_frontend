//로딩화면
import React from "react";
import { useState } from "react";
import styles from "./Loading.module.css";

function Loading() {
  const [isHidden1, setIsHidden1] = useState(true);
  const [isHidden2, setIsHidden2] = useState(true);
  const [isHidden3, setIsHidden3] = useState(true);
  const [isHidden4, setIsHidden4] = useState(true);
  const [isHidden5, setIsHidden5] = useState(true);
  const [isHidden6, setIsHidden6] = useState(true);

  function setIsHidden() {
    if (isHidden1) {
      setIsHidden1(false);
    } else {
      if (isHidden2) {
        setIsHidden2(false);
      } else {
        if (isHidden3) {
          setIsHidden3(false);
        } else {
          if (isHidden4) {
            setIsHidden4(false);
          } else {
            if (isHidden5) {
              setIsHidden5(false);
            } else {
              if (isHidden6) {
                setIsHidden6(false);
              } else {
                setIsHidden1(true);
                setIsHidden2(true);
                setIsHidden3(true);
                setIsHidden4(true);
                setIsHidden5(true);
                setIsHidden6(true);
              }
            }
          }
        }
      }
    }
  }

  setTimeout(() => {
    setIsHidden();
  }, 1500);

  return (
    <div className={styles.line}>
      <div className={`${isHidden1 ? "hidden" : styles.line1}`}></div>
      <div className={`${isHidden2 ? "hidden" : styles.line2}`}></div>
      <div className={`${isHidden3 ? "hidden" : styles.line3}`}></div>
      <div className={`${isHidden4 ? "hidden" : styles.line4}`}></div>
      <div className={`${isHidden5 ? "hidden" : styles.line5}`}></div>
      <div className={`${isHidden6 ? "hidden" : styles.line6}`}></div>
    </div>
  );
}

export default Loading;
