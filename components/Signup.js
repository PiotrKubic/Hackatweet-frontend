import styles from "../styles/Signup.module.css";
import Image from "next/image";
import { isUserConnected } from "../reducers/users";
import { useDispatch } from "react-redux";
import { useState } from "react";

const backend = "http://localhost:3000";

function Signup() {
  const [pseudoInput, setPseudoInput] = useState("");
  const [usernameInput, setUsernameInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const dispatch = useDispatch();

  async function handleSignup() {
    const signupResponse = await fetch(`${backend}/users/signup`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        pseudo: pseudoInput,
        username: usernameInput,
        password: passwordInput,
      }),
    });
    const signupData = await signupResponse.json();
    console.log(signupData);
    if (signupData.result) {
      setPseudoInput("");
      setUsernameInput("");
      setPasswordInput("");
      dispatch(isUserConnected(signupData.user.token));
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
      <div className={styles.signupMessage}>Create your Hackatweet account</div>
      <input
        type="text"
        className={styles.pseudoInput}
        onChange={(e) => setPseudoInput(e.target.value)}
        placeholder="Firstname"
        value={pseudoInput}
      ></input>
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
      <button className={styles.signupButton} onClick={() => handleSignup()}>
        Sign up
      </button>
    </div>
  );
}

export default Signup;
