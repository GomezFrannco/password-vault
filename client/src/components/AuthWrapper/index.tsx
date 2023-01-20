import { useState } from "react";
import styles from "./styles.module.css";

export default function AuthWrapper({
  children,
  auth,
}: {
  children: React.ReactNode;
  auth: "signin" | "signup";
}) {
  const [service, setService] = useState(auth);
  return (
    <div className={styles.authWrapper}>
      <div className={styles.authForm}>
        {children}
      </div>
      {service == "signin" ? (
        <div className={styles.signinMessage}>
          <h1>Welcome back to Vrypt, your secure password vault!</h1>
        </div>
      ) : (
        <div className={styles.signupMessage}>
          <h1>
            Vrypt is a secure management solution designed to keep and store
            your digital assets safe.
          </h1>
          <ul>
            <li>Generate safe passwords.</li>
            <li>Everything is encrypted.</li>
            <li>Vault is a free service.</li>
          </ul>
        </div>
      )}
    </div>
  );
}
