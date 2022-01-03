import Twitter from "../../svg/twitter.svg";
import Instagram from "../../svg/instagram.svg";
import Linkedin from "../../svg/linkedin.svg";
import YouTube from "../../svg/youtube.svg";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { NewsletterAlert } from "../";

import {
  SUCCESS,
  ERROR,
  ACTIVE_SUB,
  submitEmail,
} from "../../utils/newsletterSignUpHelpers";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    await submitEmail({
      email,
      onAlreadyActive: () => setStatus(ACTIVE_SUB),
      onSuccess: () => setStatus(SUCCESS),
      onError: () => setStatus(ERROR),
    });
  };

  return (
    <footer className="relative bg-gray-900 max-w-7xl py-8 mt-8 rounded-lg mb-4 lg:mb-8 mx-auto">
      <div className="mx-4 md:mx-8">
        <div className="md:grid md:grid-cols-6">
          <Link href="/">
            <a>
              <Image
                src="/images/logo.png"
                alt="Niall Maher logo"
                width={64}
                height={64}
              />
            </a>
          </Link>
          <div className="flex flex-col mb-6 mt-6 md:mt-0">
            <h4 className="text-lg font-bold text-gray-400 mb-2 tracking-wider uppercase">
              Popular
            </h4>
            <Link href="/blog">
              <a className="text-gray-300 hover:text-gray-400 mb-2">Blog</a>
            </Link>
            <Link href="/newsletter">
              <a className="text-gray-300 hover:text-gray-400">Newsletter</a>
            </Link>
          </div>
          <div className="flex flex-col mb-6">
            <h4 className="text-lg font-bold text-gray-400 mb-2 tracking-wider uppercase">
              Useful Links
            </h4>
            <Link href="/contact">
              <a className="text-gray-300 hover:text-gray-400 mb-2">Contact</a>
            </Link>
            <a
              target="_blank"
              href="https://discord.gg/fV5QsWSsM8"
              className="text-gray-300 hover:text-gray-400 mb-2"
            >
              Codú Discord
            </a>
          </div>
          <div />
          <div className="col-span-2 mb-8">
            <h3 className="text-lg font-semibold text-gray-400 tracking-wider uppercase">
              Subscribe to my newsletter
            </h3>
            <p className="mt-4  mb-6 text-base text-gray-300">
              I write a newsletter to curate my favourite articles and thoughts
              on running a tech startup and building stuff that people love to
              use. It's free with no spam.
            </p>
            <form className="mt-4 sm:flex sm:max-w-md" onSubmit={handleSubmit}>
              <label htmlFor="emails" className="sr-only">
                Email address
              </label>
              <input
                type="email"
                name="email"
                id="email"
                autoComplete="email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
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
            {status && (
              <NewsletterAlert
                status={status}
                open={!!status}
                onClose={() => {
                  setStatus(null);
                  setEmail("");
                }}
              />
            )}
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
