import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/menu.css";

export default function Menu() {
  return (
    <div class="container py-3">
      <header>
        <div class="d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
          <a
            href="/"
            class="d-flex align-items-center text-dark text-decoration-none"
          >
            <h2>Gift of Sharing</h2>
          </a>

          <nav class="d-inline-flex mt-2 mt-md-0 ms-md-auto">
            <Link to="/stores" className="link-text">
              List of the participating stores
            </Link>
            <Link to="/shelters" className="link-text">
              Homeless Shelters
            </Link>
            <Link to="/newstore" className="link-text">
              Your Store Page
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
