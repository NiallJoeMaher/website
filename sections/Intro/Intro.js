import { useState } from "react";

import styles from "./Intro.module.css";

export default function Intro() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `/api/subscribe`;
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email,
        }),
      });
      const data = response.json();
      setStatus(data);
      setEmail("");
    } catch (error) {
      setStatus("ERROR");
    }
  };

  return (
    <>
      <section className={styles.container}>
        <h1>
          Exploring Ideas on Web <br /> Development and Business.
        </h1>
        <p className={styles.subtitle}>+ and some random stuff.</p>
        <form className={styles.inputContainer} onSubmit={handleSubmit}>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button className={styles.button} type="submit">
            Subscribe
          </button>
        </form>
      </section>
    </>
  );
}
