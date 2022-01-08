import Head from "next/head";
import { useEffect, useRef } from "react";
import { Layout } from "../components";
import Image from "next/image";
import Link from "next/link";

import main from "../public/images/head_main.png";
import orange from "../public/images/head_orange.png";
import pink from "../public/images/head_pink.png";

const ITEMS = [
  {
    id: "orange",
    src: orange,
    styleProps: {
      "offset-x": -24,
      "offset-y": -12,
      "translate-x": 10,
      "translate-y": 10,
      "offset-z": -5,
    },
    shadows: [-5],
  },
  {
    id: "pink",
    src: pink,
    styleProps: {
      "offset-x": 24,
      "offset-y": 12,
      "translate-x": 5,
      "translate-y": -15,
      "offset-z": 0,
    },
    shadows: [-5],
  },
  {
    id: "main",
    src: main,
    styleProps: {
      "offset-x": 0,
      "offset-y": 0,
      "translate-x": 10,
      "translate-y": 2,
      "offset-z": 5,
    },
    shadows: [-5, 0],
  },
];

const mapRange = (inputLower, inputUpper, outputLower, outputUpper) => {
  const INPUT_RANGE = inputUpper - inputLower;
  const OUTPUT_RANGE = outputUpper - outputLower;
  return (value) =>
    outputLower + (((value - inputLower) / INPUT_RANGE) * OUTPUT_RANGE || 0);
};

const BobbleHead = ({ bounds = 120, proximity = 400 }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    const UPDATE = ({ x, y }) => {
      // Create coefficient ranges
      const containerBounds = containerRef.current.getBoundingClientRect();
      const centerX = containerBounds.left + containerBounds.width / 2;
      const centerY = containerBounds.top + containerBounds.height / 2;
      const MAPPED_X = mapRange(
        centerX - proximity,
        centerX + proximity,
        -bounds,
        bounds
      )(x);
      const MAPPED_Y = mapRange(
        centerY - proximity,
        centerY + proximity,
        -bounds,
        bounds
      )(y);
      containerRef.current.style.setProperty(
        "--x",
        `clamp(-1, ${MAPPED_X / 100}, 1)`
      );
      containerRef.current.style.setProperty(
        "--y",
        `clamp(-1, ${MAPPED_Y / 100}, 1)`
      );
    };
    document.addEventListener("pointermove", UPDATE);
    return () => {
      document.removeEventListener("pointermove", UPDATE);
    };
  }, []);
  return (
    <div
      ref={containerRef}
      className="h-64 w-64 sm:h-96 sm:w-96 mx-auto md:mx-0 md:h-full md:w-full relative parallax"
    >
      <div className="h-full w-full relative parallax-container">
        {ITEMS.map(({ id, src, styleProps, shadows }) => {
          const styles = {};
          Object.keys(styleProps).forEach(
            (key) => (styles[`--${key}`] = styleProps[key])
          );
          return (
            <div
              className="absolute parallax-item h-3/4 w-3/4 top-1/2 left-1/2 z-20"
              key={id}
              style={styles}
            >
              <Image layout="fill" objectFit="contain" src={src} />
              {shadows.map((shadow) => (
                <img
                  style={{
                    "--offset-z":
                      (Math.abs(shadow) +
                        (Math.abs(styleProps["offset-z"]) || 0)) *
                      -1,
                  }}
                  className={`object-contain h-full absolute parallax-shadow blur-${
                    shadow >= 0 ? "md" : "lg"
                  } brightness-0 opacity-${shadow >= 0 ? 75 : 50}`}
                  src={src.src}
                />
              ))}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default function Index() {
  return (
    <Layout>
      <Head>
        <title>👋 Welcome to My Site | About Niall Maher.</title>
        <meta property="og:type" content="profile" />
      </Head>
      <div className="relative lg:mx-auto">
        <h1 className="font-extrabold text-5xl sm:text-7xl text-gray-900 mt-8 mb-16 sm:mt-16 sm:mb-28">
          Niall Maher
        </h1>

        <main className="text-gray-500 text-2xl">
          <div className="flex flex-col-reverse md:grid grid-cols-2">
            <div>
              <p className="mb-8">
                💫 I am a founder of{" "}
                <a
                  target="_blank"
                  className="fancy-pants-link"
                  href="https://myqu.io/"
                >
                  MyQu
                </a>
                , where we believe that{" "}
                <span className="font-semibold">
                  great people create great companies
                </span>
                , and we help companies win in business by helping to hire great
                people.
              </p>
              <p className="mb-8">
                ✏️ I've worked in nearly every corner of technology businesses;
                Lead Developer, Software Architect, Product Manager, CTO and now
                happily a Founder.
              </p>
              <p className="mb-8">
                Worked on the successful acquisition of Singlepoint (now a
                Version 1 company) as part of the leadership team and led the
                internal product{" "}
                <a
                  className="fancy-pants-link"
                  target="_blank"
                  href="https://aws.amazon.com/es/solutions/consulting-offers/version1-designandbuild-applications-with-dapx/"
                >
                  DAPx
                </a>
                . ✌
              </p>
              <p className="mb-8">
                I run one of the largest coding communities 👨‍💻 in Ireland, the{" "}
                <span className="font-semibold">Codú Community</span>. You can
                find the <span className="font-semibold">YouTube</span> channel{" "}
                <a
                  className="fancy-pants-link"
                  target="_blank"
                  href="https://www.youtube.com/channel/UCvI5azOD4eDumpshr00EfIw"
                >
                  here
                </a>
                , <span className="font-semibold">Discord</span>{" "}
                <a
                  className="fancy-pants-link"
                  target="_blank"
                  href="https://discord.gg/fV5QsWSsM8"
                >
                  here
                </a>{" "}
                or the <span className="font-semibold">Meetup</span> group{" "}
                <a
                  className="fancy-pants-link"
                  target="_blank"
                  href="https://www.meetup.com/codu-community/"
                >
                  here
                </a>
                .
              </p>
              <p className="mb-8">
                I write a{" "}
                <Link href="/newsletter">
                  <a className="fancy-pants-link">newsletter</a>
                </Link>{" "}
                to curate my favourite articles and thoughts on running a{" "}
                <span className="font-semibold">tech startup</span> and{" "}
                <span className="font-semibold">building stuff</span> that
                people love to use. If you are interested, sign up{" "}
                <Link href="/newsletter">
                  <a className="fancy-pants-link">here</a>
                </Link>
                .
              </p>
            </div>
            <div className="relative m-auto p-10 h-full w-full">
              <BobbleHead />
            </div>
          </div>
        </main>
      </div>
    </Layout>
  );
}
// <div className="absolute top-0 left-0 opacity-75 z-10">
//   <Image src={headshot} />
// </div>

export async function getStaticProps() {
  const client = require("contentful").createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_DELIVERY,
  });

  async function fetchEntries() {
    const entries = await client.getEntries();
    if (entries.items) return entries.items;
    console.log(`Error getting Entries for ${contentType.name}.`);
  }

  const newPosts = await fetchEntries();

  return {
    props: { newPosts },
  };
}
