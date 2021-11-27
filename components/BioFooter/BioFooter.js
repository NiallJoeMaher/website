import Image from "next/image";
import Link from "next/link";
export default function BioFooter() {
  return (
    <div className="max-w-3xl mx-auto border-t-2 pt-6 border-gray-300">
      <div className="flex mx-2 sm:mx-6 md:mx-auto">
        <div className="mr-4 flex-shrink-0 self-center">
          <Image
            className="rounded-full"
            height={70}
            width={70}
            src="/images/headshot-bio.webp"
          />
        </div>
        <div>
          <h4 className="text-gray-800 text-lg md:text-xl font-bold">
            Written by Niall Maher
          </h4>
          <p className="mt-1 text-gray-800">
            Articles and thoughts on running a tech startup and building stuff
            that people love to use. Founder @{" "}
            <a
              className="fancy-pants-link"
              target="_blank"
              href="https://myqu.io"
            >
              MYQU
            </a>
            . Subscribe to my{" "}
            <Link href="/newsletter">
              <a className="fancy-pants-link">newsletter</a>
            </Link>{" "}
            for new articles and posts I find interesting{" "}
            <Link href="/newsletter">
              <a className="fancy-pants-link">here</a>
            </Link>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
