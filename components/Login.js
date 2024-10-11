import styles from "../styles/Login.module.css";
import Image from "next/image";
import Signin from "./Signin";
import Signup from "./Signup";
import { ConfigProvider, Modal } from "antd";
import { useState } from "react";

function Login() {
  const [isSignupModalOpen, setIsSignupModalOpen] = useState(false);
  const [isSigninModalOpen, setIsSigninModalOpen] = useState(false);

  const showSignupModal = () => {
    setIsSignupModalOpen(true);
  };

  const closeSignupModal = () => {
    setIsSignupModalOpen(false);
  };

  const showSigninModal = () => {
    setIsSigninModalOpen(true);
  };

  const closeSigninModal = () => {
    setIsSigninModalOpen(false);
  };

  const signinModal = (
    <Modal
      open={isSigninModalOpen}
      footer={[]}
      onCancel={closeSigninModal}
      styles={{
        body: { backgroundColor: "#111820" },
      }}
    >
      <Signin></Signin>
    </Modal>
  );

  const signupModal = (
    <Modal
      open={isSignupModalOpen}
      footer={[]}
      onCancel={closeSignupModal}
      styles={{
        body: { backgroundColor: "#111820" },
      }}
    >
      <Signup></Signup>
    </Modal>
  );

  const modalTheme = {
    token: {
      borderRadius: "20px",
    },
  };

  return (
    <div className={styles.mainContainer}>
      <div className={styles.leftContainer}>
        <div className={styles.logoLarge}>
          <Image src="/logo.png" alt="logo" width={3000} height={3000}></Image>
        </div>
      </div>
      <div className={styles.rightContainer}>
        <div className={styles.logoSmall}>
          <Image src="/logo.png" alt="logo" width={3000} height={3000}></Image>
        </div>
        <div className={styles.taglineContainer}>
          <div className={styles.mainTagline}>See what's happening</div>
          <div className={styles.secondaryTagline}>Join Hackatweet today.</div>
        </div>
        <button
          className={styles.signUpButton}
          onClick={() => showSignupModal()}
        >
          Sign up
        </button>
        <div className={styles.accountQuestion}>Already have an account?</div>
        <button
          className={styles.signInButton}
          onClick={() => showSigninModal()}
        >
          Sign in
        </button>
        <ConfigProvider theme={modalTheme}>
          {signupModal}
          {signinModal}
        </ConfigProvider>
      </div>
    </div>
  );
}

export default Login;
