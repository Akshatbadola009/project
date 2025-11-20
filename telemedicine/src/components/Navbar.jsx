import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <header className="navbar">
      <h2 className="logo">🩺 HealthCare</h2>

      <nav className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/doctors">Doctors</Link>
        <Link to="/medicines">Medicines</Link>
        <Link to="/cart">Cart</Link>
      </nav>
    </header>
  );
}
