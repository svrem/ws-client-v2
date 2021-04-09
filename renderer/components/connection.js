import styles from "../styles/Connection.module.css";
import { useState, useEffect } from "react";

const connection = ({ url, setConnected, connected, ws, setWs }) => {
  useEffect(() => {
    if (ws !== false) {
      console.log(ws);
      ws.onopen = () => {
        setConnected(true);
      };
      ws.onclose = () => {
        setConnected(false);
      };
    }
  }, [ws]);

  useEffect(() => {
    if (ws === false) {
      setWs(new WebSocket(url || "ws://localhost:3001"));
    }
  }, [connected]);

  console.log(connected);
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
