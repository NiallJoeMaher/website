import { useState } from "react";

import styles from "./Intro.module.css";

const [SUCESS, ERROR, ACTIVE_SUB] = ["SUCESS", "ERROR", "ACTIVE_SUB"];

export default function Intro() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const setStatusMessage = (status) => {
    const statuses = {
      [SUCESS]:
        "Wooo thanks for subscribing! 🥳 Check your email to confirm your subscription.",
      [ERROR]:
        "Something went wrong, check your email and please try again... 😢",
      [ACTIVE_SUB]:
        "Trying to subscribe again? You are already a subscriber! Check your spam if you haven't been getting my newsletter. 😉",
    };

    return statuses[status];
  };

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
      const data = await response.json();
      if (data?.subscription.state === "active") setStatus(ACTIVE_SUB);
      if (data?.subscription.state === "inactive") setStatus(SUCESS);
      if (data.error) throw new Error();
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
            disabled={status === SUCESS || status === ACTIVE_SUB}
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
            disabled={status === SUCESS || status === ACTIVE_SUB}
          >
            Subscribe
          </button>
        </form>
        {status && <p>{setStatusMessage(status)}</p>}
      </section>
    </>
  );
}
