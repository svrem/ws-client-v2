import React from "react";
import styles from "../styles/Connection.module.css";
import { useRouter } from "next/router";

const sendform = ({ setMessages, messages, sendMessage }) => {
  const router = useRouter();

  return (
    //
    // }}
    <div className={styles.sendForm}>
      <button
        onClick={() => router.push("/home")}
        className={styles.Disconnect}
      >
        Disconnect
      </button>
      <input placeholder="Message" className={styles.input} />
      <button
        onClick={() => {
          console.log("wow");
          setMessages([
            ...messages,
            { text: "gerda is kaulo groot2", send: true },
          ]);
        }}
        className={styles.Send}
      >
        Send
      </button>
    </div>
  );
};

export default sendform;
