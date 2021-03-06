import Twitter from "../../svg/twitter.svg";
import Instagram from "../../svg/instagram.svg";
import Linkedin from "../../svg/linkedin.svg";
import Image from "next/image";

import Link from "next/link";

export default function Nav() {
  return (
    <div className="">
      <nav className="max-w-5xl flex justify-between items-center mx-2 sm:mx-6 lg:mx-auto">
        <Link href="/">
          <a className="py-2">
            <Image
              src="/images/logo.png"
              alt="Picture of the author"
              width={180}
              height={72}
            />
          </a>
        </Link>

        <div className="flex items-center">
          {/* <Link href="/about">
          <a>About</a>
        </Link>
        <Link href="/contact">
          <a>Contact</a>
        </Link> */}
          <a
            className="mr-6"
            aria-label="Twitter"
            href="https://twitter.com/nialljoemaher"
            target="_blank"
          >
            <Twitter fill="hsl(255, 100%, 100%)" height="24" />
          </a>
          <a
            className="mr-6"
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
    </div>
  );
}
