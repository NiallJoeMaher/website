import { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import showing from "../../public/images/showingniall.png";

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
        <section className="relative my-20 mx-2 sm:mx-6 lg:mx-auto">
          <h1 className="font-extrabold text-5xl sm:text-7xl text-gray-900 mt-8 mb-16 sm:mt-16 sm:mb-28">
            Contact
          </h1>
          <div className="lg:grid grid-cols-2 gap-10">
            <div>
              <p className="mb-8 tracking-tight text-gray-500 text-xl sm:text-2xl">
                For <span className="font-semibold">tech startup</span> and{" "}
                <span className="font-semibold">businesses</span> looking for
                help and advisory services, please shoot me a message anytime. I
                am always excited to hear what crazy things people are working
                on and support however I can.
              </p>
              <p className="mb-8 tracking-tight text-gray-500 text-xl sm:text-2xl">
                The best place to ask for{" "}
                <span className="font-semibold">
                  coding technical or career advice
                </span>{" "}
                is the{" "}
                <a className="fancy-pants-link">Codú Community Discord</a> so
                that you can get answers from more than just me. If you have a
                private question, send me an email and I will get back to you
                (it may take a few days/weeks).
              </p>
              <p className="mb-8 font-bold text-xl sm:text-2xl text-gray-500">
                Email me on <a className="fancy-pants-link">hi@niall.af</a>
              </p>{" "}
              <p className="mb-8 text-xl sm:text-2xl text-gray-500">
                Or find me on <a className="fancy-pants-link">LinkedIn</a>,{" "}
                <a className="fancy-pants-link">Twitter</a>,{" "}
                <a className="fancy-pants-link">YouTube</a> &{" "}
                <a className="fancy-pants-link">Instagram</a>.
              </p>
            </div>
            <div className="relative hidden lg:block">
              <div className="absolute -bottom-24 mr-16">
                <Image
                  className="filter drop-shadow-md"
                  src={showing}
                  alt="Niall Maher's headshot"
                  placeholder="blur"
                />
              </div>
            </div>
          </div>
        </section>
      </Layout>
    </>
  );
}
