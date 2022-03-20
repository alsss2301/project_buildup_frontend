import React, { useState } from "react";
import axios from "axios";
import { Route, Routes, Link } from "react-router-dom";
import styles from "./Join.module.css";
import Home from "../routes/Home";

axios.defaults.withCredentials = true;

function Join() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

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

  const onSubmit = (e) => {
    e.preventDefault(); // 원래 해야될 작업을 안하게 해주는 함수.
    if (password !== password2) {
      alert("비밀번호와 비밀번호 확인이 다릅니다.");
    }
  };

<<<<<<< HEAD
    );
} 
=======
  const Login = () => {
    alert("회원가입이 완료되었습니다!");
    //data to server

    // return <Route path="/" exact element={<Home />} />;
  };
>>>>>>> postTest

  const getData = async () => {
    try {
      setError(null);
      setData(null);
      setLoading(true);

      const response = await axios.post(
        "http://34.64.111.239:8000/account/signup",
        {
          nickname: nickname,
          id: id,
          password: password,
        },
        { withCredentials: true }
      );
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

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
      <Link to={`/`}>
        <button className={styles.Btn} onClick={getData}>
          완료
        </button>
      </Link>
    </div>
  );
}

export default Join;
