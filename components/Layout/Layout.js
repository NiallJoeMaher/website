import Meta from "../meta";
import { Nav, Footer } from "../../components";

import styles from "./Layout.module.css";

export default function Layout({ preview, children }) {
  return (
    <>
      <Meta />
      <div className={styles.container}>
        <Nav />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
