import { useState } from "react";

import styles from "./Intro.module.css";

export default function Intro() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const onSubmit = async () => {
    const url = `https://api.convertkit.com/v3/forms/${process.env.FORM_ID}/subscribe`;
    try {
      const response = await fetch(url, {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          api_key: process.env.CONVERT_KIT_PUBLIC,
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
        <div className={styles.inputContainer}>
          <input
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button className={styles.button} onClick={onSubmit}>
            Subscribe
          </button>
        </div>
      </section>
    </>
  );
}
