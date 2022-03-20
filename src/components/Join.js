import React, { useState } from "react";
import styles from "./Join.module.css";
import { Route, Routes, Link } from "react-router-dom";
import Login from "./Logins/Login";

function Join() {
  const [inputs, setInputs] = useState({
    nickname: "",
    id: "",
    password: "",
    password2: "",
  });

  const { nickname, id, password, password2 } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // [e.target.name]: e.target.value
    });
  };

  /*
  const onSubmit = (event) => {
    event.preventDefault();
    if (password !== password2) {
      return alert("비밀번호와 비밀번호확인은 같아야 합니다.");
    } else {
      console.log("a");
      return <Login />;
    }
  }; */

  return (
    <div>
      <h1 className={styles.join}>회원가입</h1>
      <input
        className={styles.nickname}
        id="nickname"
        name="nickname"
        placeholder="닉네임"
        value={nickname}
        onChange={onChange}
      />
      <button className={styles.check}>중복확인</button>
      <br></br>
      <input
        className={styles.id}
        id="id"
        name="id"
        placeholder="아이디"
        value={id}
        onChange={onChange}
      />
      <button className={styles.checkid}>중복확인</button>
      <br></br>
      <input
        className={styles.password}
        id="password"
        name="password"
        placeholder="비밀번호"
        value={password}
        onChange={onChange}
      />
      <br></br>
      <input
        className={styles.password2}
        id="password2"
        name="password2"
        placeholder="비밀번호 확인"
        value={password2}
        onChange={onChange}
      />
      <br></br>
      <form>
        <Link to={`/`}>
          <button className={styles.Btn}>완료</button>
        </Link>
      </form>
    </div>
  );
}

export default Join;
