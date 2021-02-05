import Twitter from "../../svg/twitter.svg";
import Instagram from "../../svg/instagram.svg";
import Linkedin from "../../svg/linkedin.svg";

import styles from "./Footer.module.css";

import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.links}>
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
        <div className={styles.socialIcons}>
          <a
            aria-label="Twitter"
            href="https://twitter.com/nialljoemaher"
            target="_blank"
          >
            <Twitter fill="hsl(0, 0%, 0%)" height="24" />
          </a>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/nialljoemaher/"
            target="_blank"
          >
            <Linkedin fill="hsl(0, 0%, 0%)" height="24" />
          </a>
          <a
            aria-label="Instagram"
            href="https://www.instagram.com/nialljoemaher/"
            target="_blank"
          >
            <Instagram fill="hsl(0, 0%, 0%)" height="24" />
          </a>
        </div>
      </div>
    </footer>
  );
}
