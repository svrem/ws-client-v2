import React from "react";
import styles from "../styles/Connection.module.css";
import { BsArrowUp, BsArrowDown } from "react-icons/bs";

const message = ({ message }) => {
  return (
    <div className={styles.message}>
      {message.send ? <BsArrowUp /> : <BsArrowDown />}
      <h1>{message.text}</h1>
    </div>
  );
};

export default message;
