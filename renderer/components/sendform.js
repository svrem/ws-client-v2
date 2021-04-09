import React from "react";
import styles from "../styles/Connection.module.css";

const sendform = () => {
  return (
    <div className={styles.sendForm}>
      <button className={styles.Disconnect}>Disconnect</button>
      <input placeholder="Message" className={styles.input} />
      <button className={styles.Send}>Send</button>
    </div>
  );
};

export default sendform;
