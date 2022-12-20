import { Link } from "@remix-run/react";

export default function ShopLayout({ children }) {
  return (
    <>
      <nav
        style={{
          background: "lightgray",
          borderBottom: "1px solid black",
          padding: "10px",
          display: "flex",
        }}
      >
        <ul>
          <Link to="/" style={{ padding: "10px" }}>
            Shop version
          </Link>
          <Link to="/blog" style={{ padding: "10px" }}>
            lala
          </Link>
          <Link t0="/learn-to-code" style={{ padding: "10px" }}>
            yo
          </Link>
        </ul>
      </nav>
      {children}
    </>
  );
}
