import { Link } from "react-router-dom";

const Header = () => (
  <nav
    style={{
      padding: "20px",
      backgroundColor: "#f8f9fa",
      borderBottom: "1px solid #ddd",
    }}>
    <Link
      to="/"
      style={{
        fontSize: "1.2rem",
        textDecoration: "none",
        color: "#333",
        fontWeight: "bold",
      }}>
      Blogs
    </Link>
    <Link
      to="/"
      style={{
        fontSize: "1.5rem",
        textdecoration: "none",
        color: "grey",
        fontWeight: "bold",
        marginLeft:"20px",
      }}>მთავარი</Link>
  </nav>
);

export default Header;
