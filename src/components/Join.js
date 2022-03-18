import React, { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import styles from "./Join.module.css";
import Login from "../components/Logins/Login";

function Join() {

    const [inputs, setInputs] = useState({
        nickname: "",
        id: "",
        password: "",
        password2: ""
      });
    
      const { nickname ,id, password, password2 } = inputs;
    
      const onChange = (e) => {
        const { value, name } = e.target;
        setInputs({
          ...inputs,
          [name]: value, // [e.target.name]: e.target.value
        });
      };

      const onSubmit = (e) => {
        e.preventDefault(); // 원래 해야될 작업을 안하게 해주는 함수.
        if(password !== password2)
          {
            alert("비밀번호와 비밀번호 확인이 다릅니다.");
          }
      }

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
                className = {styles.password}
                id="password"
                name="password"
                placeholder="비밀번호"
                value={password}
                onChange={onChange}
            />
            <br></br>
             <input 
                className = {styles.password2}
                id="password2"
                name="password2"
                placeholder="비밀번호 확인"
                value={password2}
                onChange={onChange}
            />
            <br></br>
              <button className={styles.Btn} onClick={password == password2 ? ()=><Login /> : onSubmit}>완료</button>
        </div>

        

    );
} 

export default Join; 