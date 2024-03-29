import { useState, useEffect } from "react";
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

export default function Newsletter({ issues }) {
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
          <title>
            ✉️ Newsletter | Tech Startups and Building Stuff People Love
          </title>
          <meta
            key="og:title"
            property="og:title"
            content="Get the Newsletter ✉️"
          />
          <meta
            key="og:image"
            property="og:image"
            content="/images/og/newsletter-og.png"
          />
          <meta
            key="og:description"
            property="og:description"
            content="The newsletter curates my favourite articles and thoughts on running a tech startup and building stuff that people love to use."
          />
          <meta
            key="description"
            property="description"
            content="The newsletter curates my favourite articles and thoughts on running a tech startup and building stuff that people love to use."
          />
          <meta property="og:url" content="https://niall.af/newsletter" />
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
              <div className="bg-gray-900 rounded-lg mx-auto lg:my-12 px-4 sm:px-8 py-8 lg:p-12 lg:items-center">
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
                  <form className="sm:flex">
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
                    <div className="mt-4 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                      <button
                        type="submit"
                        className="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-b from-niall-pink to-niall-orange hover:from-niall-pink-600 hover:to-niall-orange-600 focus:ring-niall-pink-500"
                      >
                        Subscribe
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
          <h3 className="mt-8 text-gray-800 font-bold text-3xl">
            Recent issues
          </h3>
          <div className="mt-4 pt-4 grid gap-16 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12">
            {issues.map((post) => {
              const date = new Date(post.sent_at);
              const formattedDate = `${date.getDate()}/${
                date.getMonth() + 1
              }/${date.getFullYear()}`;

              return (
                <div key={post.title}>
                  <p className="text-sm text-gray-500">
                    <time dateTime={post.sent_at}>{formattedDate}</time>
                  </p>
                  <a
                    href={post.url}
                    target="_blank"
                    rel="noreferrer noopener"
                    className="mt-2 block"
                  >
                    <p className="text-xl font-semibold text-gray-800">
                      {post.title}
                    </p>
                  </a>
                  <div className="mt-2">
                    <a
                      href={post.url}
                      target="_blank"
                      rel="noreferrer noopener"
                      className="text-base font-semibold fancy-pants-link"
                    >
                      Read Issue
                    </a>
                  </div>
                </div>
              );
            })}
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

export async function getStaticProps() {
  const response = await fetch("https://www.getrevue.co/api/v2/issues", {
    headers: {
      Authorization: `Token ${process.env.REVUE_KEY}`,
      "Content-Type": "application/json",
    },
  });
  const issues = await response.json();

  return {
    props: {
      issues,
    },
    revalidate: 10, // In seconds
  };
}
