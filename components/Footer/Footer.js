import Twitter from "../../svg/twitter.svg";
import Instagram from "../../svg/instagram.svg";
import Linkedin from "../../svg/linkedin.svg";

// import Link from "next/link";

export default function Footer() {
  return (
    <footer className="relative bg-black py-8 mt-8 border-0 border-t">
      <div className="max-w-5xl mx-auto">
        <div>
          {/* <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link> */}
        </div>
        <div className="flex justify-end mx-2 sm:mx-6 lg:mx-auto">
          <a
            className="h-12 w-12 flex justify-center items-center rounded-full bg-gradient-fun"
            aria-label="Twitter"
            href="https://twitter.com/nialljoemaher"
            target="_blank"
          >
            <Twitter fill="hsl(0, 0%, 0%)" height="24" width="24" />
          </a>
          <a
            className="ml-6 h-12 w-12 flex justify-center items-center rounded-full bg-gradient-fun"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/nialljoemaher/"
            target="_blank"
          >
            <Linkedin fill="hsl(0, 0%, 0%)" height="24" />
          </a>
          <a
            className="ml-6 h-12 w-12 flex justify-center items-center rounded-full bg-gradient-fun"
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
