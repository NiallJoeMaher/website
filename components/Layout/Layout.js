import Meta from "../meta";

import { Nav, Footer } from "../../components";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="relative bg-gray-100 overflow-y-hidden max-w-100">
        <div className="relative lg:mx-4">
          <Nav />
          <main className="max-w-7xl mx-auto">{children}</main>
        </div>
        <Footer />
      </div>
    </>
  );
}
