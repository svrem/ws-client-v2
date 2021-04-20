import React from "react";
import styles from "../styles/Connection.module.css";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";
import { useState } from "react";
import { clipboard } from "electron";

const message = ({ message, triggerMessage }) => {
  const [big, setBig] = useState(false);
  const [copied, setCopied] = useState(false);
  return (
    <div
      onClick={() => {
        setBig(!big);
        setCopied(true);
        triggerMessage("Copied!");
        clipboard.writeText(message.text);

        setTimeout(() => {
          setCopied(false);
        }, 500);
      }}
      className={` ${big ? styles.bigMessage : ""} ${styles.message} ${
        copied ? styles.copied : ""
      }`}
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
