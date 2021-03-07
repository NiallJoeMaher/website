import Meta from "../meta";

import { Nav, Footer } from "../../components";

export default function Layout({ children, absoluteOrbs }) {
  return (
    <div className="relative bg-gray-900 overflow-y-hidden">
      <div
        className={`${
          absoluteOrbs ? "absolute" : "fixed"
        } h-56 w-56 -left-32 top-36 md:h-96 md:w-96 md:-left-24 bg-contain`}
        style={{ backgroundImage: 'url("/images/elipse.png")' }}
      />
      <div
        className={`${
          absoluteOrbs ? "absolute" : "fixed"
        } h-56 w-56 -right-32 md:h-96 md:w-96 md:-right-36 top-16 bg-contain`}
        style={{ backgroundImage: 'url("/images/elipse.png")' }}
      />
      <Meta />
      <div className="relative">
        <div className="relative">
          <div />
          <Nav />
          <main className="max-w-5xl mx-auto">{children}</main>
        </div>
      </div>
      <Footer />
    </div>
  );
}
