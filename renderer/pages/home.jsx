import styles from "../styles/Home.module.css";
import ConnectionForm from "../components/connectionForm";

const home = () => {
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Connect</h1>
      <ConnectionForm />
    </div>
  );
};

export default home;
