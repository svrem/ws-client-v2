import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../styles/Connection.module.css";
import Messages from "../components/messages";
import SendForm from "../components/sendform";
import Disconnected from "../components/disconnected";
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
        setMessages={setMessages}
        messages={messages}
      />
      <Disconnected connected={connected} />
      <Messages messages={messages} />
      <SendForm
        setMessages={setMessages}
        messages={messages}
        sendMessage={sendMessage}
      />
    </div>
  );
};

export default connection;
