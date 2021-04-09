import testforws from "../utils/testforws";
import styles from "../styles/Home.module.css";
import { useState } from "react";
import { Router, useRouter } from "next/router";

const connectionForm = () => {
  const [url, setUrl] = useState("");
  const router = useRouter();

  const handleSubmit = (e) => {
    e.preventDefault();
    const good = testforws(url);
    if (!good && url !== "testing") {
      e.target.url.classList.remove(styles.animated);
      e.target.url.classList.add(styles.animated);
    } else {
      router.push(`/connection?url=${url}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <input
        onChange={(e) => setUrl(e.target.value)}
        className={testforws(url) || url === "" ? "" : styles.wrong_url}
        name="url"
        placeholder="URL"
      />
      <button>Connect</button>
    </form>
  );
};

export default connectionForm;
