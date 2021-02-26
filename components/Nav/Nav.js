import styles from "./Nav.module.css";
import Twitter from "../../svg/twitter.svg";
import Instagram from "../../svg/instagram.svg";
import Linkedin from "../../svg/linkedin.svg";
import Image from "next/image";

import Link from "next/link";

export default function Nav() {
  return (
    <nav className={styles.nav}>
      <Link href="/">
        <a>
          <Image
            src="/images/logo.png"
            alt="Picture of the author"
            width={200}
            height={80}
          />
        </a>
      </Link>

      <div className={styles.links}>
        <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link>
        <a
          aria-label="Twitter"
          href="https://twitter.com/nialljoemaher"
          target="_blank"
        >
          <Twitter fill="hsl(255, 100%, 100%)" height="24" />
        </a>
        <a
          aria-label="LinkedIn"
          href="https://www.linkedin.com/in/nialljoemaher/"
          target="_blank"
        >
          <Linkedin fill="hsl(255, 100%, 100%)" height="24" />
        </a>
        <a
          aria-label="Instagram"
          href="https://www.instagram.com/nialljoemaher/"
          target="_blank"
        >
          <Instagram fill="hsl(255, 100%, 100%)" height="24" />
        </a>
      </div>
    </nav>
  );
}
