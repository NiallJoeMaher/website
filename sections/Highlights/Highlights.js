import Link from "next/link";

import styles from "./Highlights.module.css";
import DateFormatter from "../../components/date-formatter";
export default function Highlights({ posts }) {
  console.log({ posts });
  return (
    <section className={styles.grid}>
      {posts.map((item) => (
        <Link href={`/posts/${encodeURIComponent(item.slug)}`}>
          <a aria-label={item.title}>
            <h3>{item.title}</h3>
            <DateFormatter dateString={item.date} />
            <p>{item.excerpt}</p>
          </a>
        </Link>
      ))}
      {posts.map((item) => (
        <Link href={`/posts/${encodeURIComponent(item.slug)}`}>
          <a aria-label={item.title}>
            <h3>{item.title}</h3>
            <DateFormatter dateString={item.date} />
            <p>{item.excerpt}</p>
          </a>
        </Link>
      ))}
    </section>
  );
}
