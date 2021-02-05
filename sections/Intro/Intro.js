import styles from "./Intro.module.css";

export default function Intro() {
  return (
    <>
      <section className={styles.container}>
        <h1>
          Exploring Ideas on Web <br /> Development and Business.
        </h1>
        <p className={styles.subtitle}>+ and some random stuff.</p>
        <div className={styles.inputContainer}>
          <input type="email" className={styles.input} />
          <button className={styles.button}>Subscribe</button>
        </div>
      </section>
    </>
  );
}
