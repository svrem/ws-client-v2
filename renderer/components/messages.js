import React from "react";
import styles from "../styles/Connection.module.css";
import Message from "./message";

const messages = ({ messages, triggerMessage }) => {
  return (
    <div className={styles.messageDiv}>
      {messages.map((message, i) => (
        <Message key={i} message={message} triggerMessage={triggerMessage} />
      ))}
    </div>
  );
};

export default messages;
