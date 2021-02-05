import styles from "./Nav.module.css";
import Twitter from "../../svg/twitter.svg";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>NM.</div>
      <div className={styles.links}>
        <div>
          <Twitter fill="hsl(195, 90%, 65%)" height="24" />
        </div>
        <div>Hello</div>
        <div>World</div>
      </div>
    </nav>
  );
}
