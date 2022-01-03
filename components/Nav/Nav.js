import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";

const navigationContent = [
  {
    text: "Home",
    url: "/",
  },
  {
    text: "Blog",
    url: "/blog",
  },
  {
    text: "Newsletter",
    url: "/newsletter",
  },
];
export default function Nav() {
  const router = useRouter();

  return (
    <div className="text-gray-500">
      <nav className="py-4 max-w-7xl flex justify-between items-center lg:mx-auto">
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
        <div className="flex items-center">
          {navigationContent.map((item) => (
            <Link key={item.url} href={item.url}>
              <a
                className={`mr-6 inline-block text-lg font-semibold${
                  router.pathname == item.url ? " fancy-pants-active" : ""
                }`}
              >
                {item.text}
              </a>
            </Link>
          ))}
        </div>
      </nav>
    </div>
  );
}
