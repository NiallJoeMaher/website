import Meta from "../meta";

import { Nav, Footer } from "../../components";

export default function Layout({ children }) {
  return (
    <>
      <Meta />
      <div className="relative bg-gray-100 overflow-y-hidden max-w-100">
        <div className="relative mx-2 sm:mx-4 md:mx-6">
          <Nav />
          <main className="max-w-7xl md:mx-auto">{children}</main>
          <Footer />
        </div>
      </div>
    </>
  );
}
