import styles from "../styles/Connection.module.css";

const connection = ({ url, connected }) => {
  console.log(connected);
  return (
    <div className={styles.status}>
      <h2>Status: {connected ? "Connected" : "Disconnected"}</h2>
      <h3>{url}</h3>
    </div>
  );
};

export default connection;
