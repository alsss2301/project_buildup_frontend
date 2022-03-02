import React from "react";
import { useState, useEffect } from "react";
import Loading from "../components/Loading.js";
import Login from "../components/Login.js";

function Main() {
  //로그인 되어있는 경우
}

function Home() {
  const [loading, setLoading] = useState(true);
  const [logincheck, setlogincheck] = useState(false);

  return (
    <div>
      {loading ? (
        <Loading />
      ) : (
        () => {
          return logincheck ? Main() : <Login />;
        }
      )}
    </div>
  );
}

export default Home;
