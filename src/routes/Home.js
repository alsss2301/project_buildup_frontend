import React, { useEffect } from "react";
import { useState } from "react";
import Loading from "../components/Loading";
import Login from "../components/Logins/Login";

function Home() {
  const [loading, setLoading] = useState(true);

  setTimeout(() => {
    setLoading(false);
  }, 1000);

  return <Login />;
  //<div>{loading ? <Loading /> : <Login />}</div>;
}

export default Home;
