//로그인화면
import React, { useState } from "react";
import axios from "axios";
import { Route, Routes, Link } from "react-router-dom";
import styles from "./Login.module.css";
import Join from "../Join";

axios.defaults.withCredentials = true; //서버 이름이 다를 경우 동일 기원으로 인식해주기 위해서,, 씀.

function Login() {
  // 기본 로그인
  const [inputs, setInputs] = useState({
    id: "",
    password: "",
  });

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const { id, password } = inputs;

  const onChange = (e) => {
    const { value, name } = e.target;
    setInputs({
      ...inputs,
      [name]: value, // [e.target.name]: e.target.value
    });
  };

  const getId = async () => {
    try {
      setData(null);
      setError(null);

      const response = await axios.get("url", { withCredentials: true });
      setData(response.data.id);
    } catch (e) {
      setError(e);
    }
  };

  return (
    <div>
      <h1 className={styles.login}>로그인</h1>
      <input
        className={styles.id}
        id="id"
        name="id"
        placeholder="아이디를 입력하세요"
        value={id}
        onChange={onChange}
      />
      <br></br>
      <input
        className={styles.password}
        id="password"
        name="password"
        type="password"
        placeholder="패스워드를 입력하세요"
        value={password}
        onChange={onChange}
      />
      <br></br>
      <button className={styles.loginBtn} onClick={getId}>
        로그인
      </button>
      <br></br>
      <Link to={`/join`}>
        <button className={styles.joinBtn}>회원가입</button>
      </Link>
    </div>
  );
}

export default Login;
