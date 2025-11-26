import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="logo">Gramarogya</h2>

      <ul className="nav-links">
        <li><Link to="/">HOME</Link></li>
        <li><Link to="/doctors">ALL DOCTORS</Link></li>
        <li><Link to="/medicine">MEDICINE</Link></li>
        <li><Link to="/prescription">PRESCRIPTION</Link></li>
      </ul>

      <div className="right">
        <Link to="/cart" className="cart">🛒</Link>
        <button className="create-btn">Create account</button>
      </div>
    </nav>
  );
}
