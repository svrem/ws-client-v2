import React from "react";
import styles from "../styles/Connection.module.css";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { useState } from "react";

const message = ({ message }) => {
  const [big, setBig] = useState(false);
  return (
    <div
      onClick={() => setBig(!big)}
      className={` ${big ? styles.bigMessage : ""} ${styles.message}`}
    >
      {message.send ? (
        <BsArrowUp className={styles.arrow} />
      ) : (
        <BsArrowDown className={styles.arrow} />
      )}
      <h1>{message.text}</h1>
    </div>
  );
};

export default message;
