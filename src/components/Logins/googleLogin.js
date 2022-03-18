import React from "react";
import GoogleLogin from "react-google-login";
import styles from "./Login.module.css";

const clientId =
  "272270899517-asq3smj9r1qj75jueslt8jpb4l9l1fnn.apps.googleusercontent.com";

export default function googleLogin({ onSocial }) {
  const onSuccess = async (response) => {
    console.log(response);

    const {
      googleId,
      profileObj: { email, name },
    } = response;

    await onSocial({
      socialId: googleId,
      socialType: "google",
      email,
      nickname: name,
    }); 
  };

  const onFailure = (error) => {
    console.log(error);
  };

  return (
    <div className={styles.googleBtn}>
      <GoogleLogin
        clientId={clientId}
        responseType={"id_token"}
        onSuccess={onSuccess}
        onFailure={onFailure}
      />
    </div>
  );
}
