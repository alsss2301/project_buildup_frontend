// api.js
import axios from "axios";
const API = axios.create();
axios.defaults.withCredentials = true; //서버 이름이 다를 경우 동일 기원으로 인식해주기 위해서,, 씀.
axios.defaults.baseURL = "http://34.64.111.239:8000/api";

// 회원가입
const PostData = (nickname, id, password) => {
  API.post(
    "http://34.64.111.239:8000/account/signup/",
    {
      nickname: nickname,
      id: id,
      password: password,
    },
    { withCredentials: true }
  );
};

export default PostData;
