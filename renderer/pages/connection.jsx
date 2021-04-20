import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Connection.module.css";
import Messages from "../components/messages";
import SendForm from "../components/sendform";
import UserMessage from "../components/userMessage";

import Connection from "../components/connection";

const connection = () => {
  const [connected, setConnected] = useState(false);
  const [messages, setMessages] = useState([]);
  const [ws, setWs] = useState(false);
  const sendMessage = (message) => {
    if (ws.readyState !== 0) {
      createMessage(message, true);
      ws.send(message);
    }
  };
  const createMessage = (message, send) => {
    setMessages([...messages, { text: message, send: send }]);
  };

  const triggerMessage = (mess) => {
    console.log(mess);
  };

  const router = useRouter();
  // console.log(messages);
  const { url } = router.query;
  return (
    <div className={styles.body}>
      <Connection
        ws={ws}
        setWs={setWs}
        url={url}
        connected={connected}
        setConnected={setConnected}
        setMessages={setMessages}
        messages={messages}
      />
      <Messages triggerMessage={triggerMessage} messages={messages} />
      <SendForm
        setMessages={setMessages}
        messages={messages}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default connection;
