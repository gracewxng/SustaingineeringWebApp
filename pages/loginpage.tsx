import Image from "next/image";
import styles from "../styles/loginpage.module.css";

export default function LoginPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Login to Your Account</h1>
      <button className={styles.button}>Get Started</button>
      <div className={styles.image}>
        <Image src="/sustain logo.png" alt="Login Image" width={800} height={300} />
      </div>
    </div>
  );
}