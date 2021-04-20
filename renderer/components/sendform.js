import React from "react";
import styles from "../styles/Connection.module.css";
import { useRouter } from "next/router";

const sendform = ({ setMessages, messages, sendMessage }) => {
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    sendMessage(document.getElementById("message").value);
    document.getElementById("message").value = "";
  };

  return (
    //
    // }}
    <form className={styles.sendForm} onSubmit={handleSubmit}>
      <button
        onClick={() => router.push("/home")}
        className={styles.Disconnect}
        type="button"
      >
        Disconnect
      </button>

      <input id="message" placeholder="Message" className={styles.input} />
      <button className={styles.Send} type="submit">
        Send
      </button>
    </form>
  );
};

export default sendform;
