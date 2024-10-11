import styles from "../styles/Signin.module.css";
import Image from "next/image";
import { isUserConnected } from "../reducers/users";
import { useDispatch } from "react-redux";
import { useState } from "react";

const backend = "http://localhost:3000";

function Signin() {
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const dispatch = useDispatch();

  async function handleSignin() {
    const signinResponse = await fetch(`${backend}/users/signin`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: usernameInput,
        password: passwordInput,
      }),
    });
    const signinData = await signinResponse.json();
    console.log(signinData);
    if (signinData.result) {
      setUsernameInput("");
      setPasswordInput("");

      dispatch(isUserConnected({token:signupData.user.token, username: signupData.user.username, pseudo: signupData.user.pseudo}));
    } else {
      setPseudoInput("");
      setUsernameInput("");
      setPasswordInput("");
    }
  }

  return (
    <div className={styles.modalContainer}>
      <Image
        className={styles.modalLogo}
        src="/logo.png"
        alt="logo"
        width={100}
        height={100}
      ></Image>
      <div className={styles.signinMessage}>Connnect to Hackatweet</div>
      <input
        type="text"
        className={styles.usernameInput}
        onChange={(e) => setUsernameInput(e.target.value)}
        placeholder="Username"
        value={usernameInput}
      ></input>
      <input
        type="password"
        className={styles.passwordInput}
        onChange={(e) => setPasswordInput(e.target.value)}
        placeholder="Password"
        value={passwordInput}
      ></input>
      <button className={styles.signinButton} onClick={() => handleSignin()}>
        Sign in
      </button>
    </div>
  );
}

export default Signin;
