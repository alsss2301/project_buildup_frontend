import React, { Component } from "react";
import styles from "./Login.module.css";

import Main from "../Main.js";

class NaverLogin extends Component {
  componentDidMount() {
    //Naver sdk import
    const naverScript = document.createElement("script");
    naverScript.src =
      "https://static.nid.naver.com/js/naveridlogin_js_sdk_2.0.2.js";
    naverScript.type = "text/javascript";
    document.head.appendChild(naverScript);

    // Naver sdk 스크립트 로드 완료시
    naverScript.onload = () => {
      const naverLogin = new window.naver.LoginWithNaverId({
        clientId: "w3SNdiwMa0pxbCx4iPev",
        callbackUrl: "https://localhost:3000/main",
        callbackHandle: true,
        isPopup: false,
        loginButton: {
          color: "green",
          type: 1,
          height: 45,
        },
      });

      naverLogin.init();
      naverLogin.logout();
      naverLogin.getLoginStatus((status) => {
        if (status) {
          return <Main />;
        } else {
          return console.log("not logined");
        }
      });
    };
  }

  render() {
    return <div className={styles.naverBtn} id="naverIdLogin"></div>;
  }
}

export default NaverLogin;
