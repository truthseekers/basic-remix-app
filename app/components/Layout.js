import { Link } from "@remix-run/react";

export default function Layout({ children }) {
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
            Home
          </Link>
          <Link to="/blog" style={{ padding: "10px" }}>
            Blog
          </Link>
          <Link t0="/learn-to-code" style={{ padding: "10px" }}>
            Learn
          </Link>
        </ul>
      </nav>
      {children}
    </>
  );
}
