import { useState, useEffect } from "react";
import Loading from "./Loading.js";
import Login from "./Login.js";

function Home() {
  const [loading, setLoading] = useState(true);

  return <div>{loading ? <Loading /> : LoginCheck()}</div>;
}
