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
  useEffect(() => {
    if (ws !== false) {
      ws.onopen = () => {
        setConnected(true);
        setMessages([]);
      };
      ws.onclose = () => {
        setConnected(false);
        setWs(false);
        console.log("closed");
        console.log(ws);
        ws.close();
      };
      ws.onmessage = (message) => {
        setMessages([...messages, { text: message.data, send: false }]);
      };
      ws.onerror = () => {
        console.log("error");
      };
    }
    return () => {};
  });

  useEffect(() => {
    let d = setInterval(() => {
      console.log(ws);
      if (ws === false) {
        setWs(new WebSocket(url || "ws://localhost:3001"));
        clearInterval(d);
      } else {
        clearInterval(d);
      }
    }, 1000);
    // return () => {};
  }, [ws]);

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
