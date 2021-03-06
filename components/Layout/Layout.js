import Meta from "../meta";

import { Nav, Footer } from "../../components";

export default function Layout({ preview, children }) {
  return (
    <div className="reative bg-gray-900">
      <div
        className="fixed h-96 w-96 -left-48 top-36 bg-contain"
        style={{ backgroundImage: 'url("/images/elipse.png")' }}
      />
      <div
        className="fixed h-96 w-96 -right-36 top-16 bg-contain"
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
