import { useState } from "react";
import Head from "next/head";
import Link from "next/link";

import {
  SUCCESS,
  ERROR,
  ACTIVE_SUB,
  submitEmail,
} from "../../utils/newsletterSignUpHelpers";
import { NewsletterAlert } from "../../components";

import { Layout } from "../../components";

export default function Newsletter() {
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
    <>
      <Layout>
        <Head>
          <title></title>
        </Head>
        <section className="relative my-20 lg:mx-auto">
          <h1 className="font-extrabold text-5xl sm:text-7xl text-gray-900 mt-8 mb-16 sm:mt-16 sm:mb-28">
            The Newsletter
          </h1>
          <div className="lg:grid grid-cols-2 gap-10">
            <div>
              <p className="mb-8 tracking-tight text-gray-500 text-xl sm:text-2xl">
                Hey, I am{" "}
                <Link href="/">
                  <a className="fancy-pants-link">Niall</a>
                </Link>
                . 👋
              </p>
              <p className="mb-8 tracking-tight text-gray-500 text-xl sm:text-2xl">
                I write a newsletter to curate my favourite articles and
                thoughts on running a{" "}
                <span className="font-semibold">tech startup</span> and{" "}
                <span className="font-semibold">building stuff</span> that
                people love to use.
              </p>
              <p className="mb-8 tracking-tight text-gray-500 text-xl sm:text-2xl">
                I send an email every{" "}
                <span className="font-semibold">Sunday morning</span>. ☕
              </p>
              <p className="mb-8 tracking-tight text-gray-500 text-xl sm:text-2xl">
                It's free with no spam, and you can unsubscribe anytime you
                like.
              </p>
            </div>
            <div>
              <div className="bg-gray-900 rounded-lg mx-auto lg:my-12 p-8 lg:p-12 lg:items-center">
                <h2
                  className="text-3xl font-extrabold text-white sm:text-4xl"
                  id="newsletter-headline"
                >
                  Sign up for the newsletter
                </h2>
                <p className="mt-3 max-w-3xl text-lg leading-6 text-gray-300">
                  Directly into your inbox every Sunday morning.
                </p>

                <div className="mt-4" onSubmit={handleSubmit}>
                  <form className="flex">
                    <label htmlFor="email" className="sr-only">
                      Email address
                    </label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      autoComplete="email"
                      required
                      className="w-full px-5 py-3 border border-transparent placeholder-gray-500 focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white focus:border-white sm:max-w-xs rounded-md"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <div className="rounded-md shadow sm:mt-0 ml-3 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-b from-niall-pink to-niall-orange hover:from-niall-pink-600 hover:to-niall-orange-600 focus:ring-niall-pink-500"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                  {/* <p className="mt-3 text-sm text-gray-300">
                    We care about the protection of your data. Read our{" "}
                    <a href="#" className="text-white font-medium underline">
                      Privacy Policy.
                    </a>
                  </p> */}
                </div>
              </div>
            </div>
          </div>
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
        </section>
      </Layout>
    </>
  );
}
