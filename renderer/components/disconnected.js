import styles from "../styles/Connection.module.css";
import { useRouter } from "next/router";

const disconnected = ({ connected }) => {
  const router = useRouter();

  return (
    <div
      className={`${
        connected ? styles.connectedBlur : styles.disconnectedBlur
      }`}
    >
      <div className={styles.loader}></div>
      <button
        className={styles.cancelBtn}
        onClick={(e) => {
          router.push("/home");
        }}
      >
        Cancel
      </button>
    </div>
  );
};

export default disconnected;
