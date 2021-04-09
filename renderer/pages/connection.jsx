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
    { text: "gerda is kaulo groot2", send: false },
    { text: "gerda is kaulo groot3", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
    { text: "gerda is kaulo groot4", send: false },
  ]);
  const router = useRouter();
  const { url } = router.query;
  return (
    <div className={styles.body}>
      <Connection url={url} connected={connected} />
      <Messages messages={messages} />
      <SendForm setMessages={setMessages} messages={messages} />
    </div>
  );
};

export default connection;
