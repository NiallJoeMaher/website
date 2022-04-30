import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";

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
  const [unlocked, setUnlocked] = useState(false);

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
          <title>📚 Free Eisenhower Matrix Template</title>
          <meta
            key="og:title"
            property="og:title"
            content="Free eisenhower matrix template"
          />
          <meta
            key="og:description"
            property="og:description"
            content="Free eisenhower matrix template"
          />
          <meta
            key="description"
            property="description"
            content="Free eisenhower matrix template"
          />
          <meta property="og:url" content="https://niall.af/newsletter" />
        </Head>
        <section className="relative my-20 lg:mx-auto max-w-5xl">
          <h1 className="font-extrabold text-3xl sm:text-4xl text-gray-900 mt-8 mb-4 sm:mt-16 sm:mb-6">
            Free PDF Eisenhower Matrix Template
          </h1>

          <p className="font-base mb-8 tracking-tight text-gray-600 text-lg sm:text-xl">
            Try out my{" "}
            <span className="text-gray-700 font-semibold">
              Free downloadable PDF Eisenhower Matrix Template!
            </span>
          </p>
          <p className="font-base mb-8 tracking-tight text-gray-600 text-lg sm:text-xl max-w-2xl">
            This template is designed to help you prioritise your tasks and
            activities.
          </p>

          {unlocked && (
            <div>
              <div className="text-lg sm:text-xl">
                👉{"  "}
                <a
                  download
                  href="/downloads/eisenhower-matrix.pdf"
                  className="fancy-pants-link text-lg sm:text-xl"
                >
                  Download your template here.
                </a>
              </div>
            </div>
          )}
          {!unlocked && (
            <div>
              <div>
                <div className="bg-gray-900 rounded-lg mx-auto lg:my-12 px-4 sm:px-8 py-8 lg:p-12 lg:items-center">
                  <h2
                    className="text-3xl font-extrabold text-white sm:text-4xl"
                    id="newsletter-headline"
                  >
                    Enter your email to unlock your template.
                  </h2>
                  <p className="mt-3 text-lg leading-6 text-gray-300">
                    By entering your email you will be signed up to my weekly
                    newsletter, it's free with no spam, and you can unsubscribe
                    anytime you like.
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
                          Get the template
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          )}
          <div className="flex justify-center mt-8">
            <Image
              className="rounded-lg shadow-2xl"
              layout="intrinsic"
              width={1180}
              height={800}
              src="/images/templates/download-matrix.png"
              alt="Screenshot of the daily Eisenhower Matrix"
            />
          </div>
          {status && (
            <NewsletterAlert
              status={status}
              open={!!status}
              onClose={() => {
                setStatus(null);
                setUnlocked(true);
                setEmail("");
              }}
            />
          )}
        </section>
      </Layout>
    </>
  );
}
