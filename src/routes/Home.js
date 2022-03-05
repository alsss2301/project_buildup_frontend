import React from "react";
import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Login from "../components/Logins/Login";

function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 5000);

  return <div>{loading ? <Loading /> : <Login />}</div>;
}

export default Home;
