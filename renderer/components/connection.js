import styles from "../styles/Connection.module.css";
import { useState, useEffect } from "react";

const connection = ({
  url,
  setConnected,
  connected,
  ws,
  setWs,
  setMessages,
  messages,
}) => {
  console.log(messages);
  // let d = setInterval(() => {
  //   setWs(new WebSocket(url || "ws://localhost:3001"));
  // }, 1000);
  useEffect(() => {
    if (ws !== false) {
      console.log(ws);
      ws.onopen = () => {
        setConnected(true);
      };
      ws.onclose = () => {
        ws.close();
        // d = setInterval(() => {
        //   setWs(new WebSocket(url || "ws://localhost:3001"));
        // }, 1000);
        setConnected(false);
      };
      ws.onmessage = (message) => {
        console.log(message.data, messages);

        setMessages([...messages, { text: message.data, send: false }]);
      };
    }
    return () => {};
  });

  useEffect(() => {
    if (ws === false) {
      setWs(new WebSocket(url || "ws://localhost:3001"));
    }
    return () => {};
  }, [connected]);

  return (
    <div className={styles.status}>
      <h2 style={{ color: connected ? "white" : "red" }}>
        Status: {connected ? "Connected" : "Disconnected"}
      </h2>
      <h3 style={{ color: connected ? "white" : "red" }}>{url}</h3>
    </div>
  );
};

export default connection;
