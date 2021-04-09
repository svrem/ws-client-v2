import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Connection.module.css";
import Messages from "../components/messages";
import SendForm from "../components/sendform";

import Connection from "../components/connection";

const connection = () => {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([
    { text: "gerda is kaulo groot", send: false },
  ]);
  const [ws, setWs] = useState(false);
  const sendMessage = (message) => {};

  const router = useRouter();
  const { url } = router.query;
  return (
    <div className={styles.body}>
      <Connection
        ws={ws}
        setWs={setWs}
        url={url}
        connected={connected}
        setConnected={setConnected}
      />
      <Messages messages={messages} />
      <SendForm setMessages={setMessages} messages={messages} />
    </div>
  );
};

export default connection;
