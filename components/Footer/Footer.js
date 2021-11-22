import Twitter from "../../svg/twitter.svg";
import Instagram from "../../svg/instagram.svg";
import Linkedin from "../../svg/linkedin.svg";
import YouTube from "../../svg/youtube.svg";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative bg-gray-900 max-w-7xl py-8 mt-8 border-0 border-t rounded-lg mb-4 lg:mb-8 mx-4 xl:mx-auto">
      <div className="mx-8">
        <div className="md:grid md:grid-cols-6">
          <Link href="/">
            <a className="flex mb-6 sm:inline">
              <Image
                src="/images/logo.png"
                alt="Niall Maher logo"
                width={64}
                height={64}
              />
            </a>
          </Link>
          <div className="flex flex-col mb-6">
            <h4 className="text-lg font-bold text-gray-400 mb-2 tracking-wider uppercase">
              More
            </h4>
            <Link href="/about">
              <a className="text-gray-400 hover:text-gray-500 mb-2">About</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-400 hover:text-gray-500">Contact</a>
            </Link>
          </div>
          <div className="flex flex-col mb-6">
            <h4 className="text-lg font-bold text-gray-400 mb-2 tracking-wider uppercase">
              Useful Links
            </h4>
            <Link href="/about">
              <a className="text-gray-400 hover:text-gray-500 mb-2">About</a>
            </Link>
            <Link href="/contact">
              <a className="text-gray-400 hover:text-gray-500 mb-2">Contact</a>
            </Link>
          </div>
          <div />
          <div className="col-span-2 mb-8">
            <h3 className="text-lg font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to my newsletter
            </h3>
            <p className="mt-4  mb-6 text-base text-gray-300">
              Get my newsletter every Sunday morning with my thoughts, ramblings
              and articles to help you grow your technology business.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md">
              <label htmlFor="email-address" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email-address"
                id="email-address"
                autoComplete="email"
                required
                className="appearance-none min-w-0 w-full bg-white border border-transparent rounded-md py-2 px-4 text-base text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white focus:placeholder-gray-400"
                placeholder="Enter your email"
              />
              <div className="mt-3 rounded-md sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                <button
                  type="submit"
                  className="w-full bg-gradient-to-b from-niall-pink to-niall-orange hover:from-niall-pink-600 hover:to-niall-orange-600 border border-transparent rounded-md py-2 px-4 flex items-center justify-center text-base font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-nialls-pink"
                >
                  Subscribe
                </button>
              </div>
            </form>
          </div>
        </div>
        <div />

        <div className="flex justify-end mx-2 sm:mx-6 lg:mx-auto">
          <a
            className="h-12 w-12 flex justify-center items-center rounded-full bg-gradient-to-b from-white to-white hover:from-niall-pink hover:to-niall-orange"
            aria-label="YouTube"
            href="https://www.youtube.com/channel/UCvI5azOD4eDumpshr00EfIw"
            target="_blank"
          >
            <YouTube fill="hsl(221, 39%, 11%)" height="24" width="24" />
          </a>
          <a
            className="ml-6 h-12 w-12 flex justify-center items-center rounded-full bg-gradient-to-b from-white to-white hover:from-niall-pink hover:to-niall-orange"
            aria-label="Twitter"
            href="https://twitter.com/nialljoemaher"
            target="_blank"
          >
            <Twitter fill="hsl(221, 39%, 11%)" height="24" width="24" />
          </a>
          <a
            className="ml-6 h-12 w-12 flex justify-center items-center rounded-full bg-gradient-to-b from-white to-white hover:from-niall-pink hover:to-niall-orange"
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/nialljoemaher/"
            target="_blank"
          >
            <Linkedin fill="hsl(221, 39%, 11%)" height="24" />
          </a>
          <a
            className="ml-6 h-12 w-12 flex justify-center items-center rounded-full bg-gradient-to-b from-white to-white hover:from-niall-pink hover:to-niall-orange"
            aria-label="Instagram"
            href="https://www.instagram.com/nialljoemaher/"
            target="_blank"
          >
            <Instagram fill="hsl(221, 39%, 11%)" height="24" />
          </a>
        </div>
      </div>
    </footer>
  );
}
