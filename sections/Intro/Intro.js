import { useState } from "react";

import styles from "./Intro.module.css";

const [SUCESS, ERROR] = ["SUCESS", "ERROR"];

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
      console.log({ data });
      setStatus(SUCESS);
      setEmail("");
    } catch (error) {
      setStatus(ERROR);
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
            disabled={status === SUCESS}
            type="email"
            className={styles.input}
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <button
            className={styles.button}
            type="submit"
            disabled={status === SUCESS}
          >
            Subscribe
          </button>
        </form>
        {status === SUCESS && <p> Wooo thanks for subscribing! 🥳</p>}
        {status === ERROR && (
          <p>
            {" "}
            Something went wrong, check your email and please try again... 😢
          </p>
        )}
      </section>
    </>
  );
}
