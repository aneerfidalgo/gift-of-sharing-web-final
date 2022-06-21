import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../styles/menu.css";
import { useNavigate } from "react-router-dom";

export default function Menu() {
  const navigate = useNavigate();
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
            <Link className="link-text" to="/">
              Home
            </Link>
            <Link to="/stores" className="button-text">
              <button
                onClick={() => navigate("/stores")}
                type="button"
                class="btn btn-info"
              >
                List of the participating stores
              </button>
            </Link>
            <Link to="/shelters" className="button-text">
              <button
                onClick={() => navigate("/shelters")}
                type="button"
                class="btn btn-info"
              >
                Homeless Shelters
              </button>
            </Link>
            <Link to="/newstore" className="button-text">
              <button
                onClick={() => navigate("/newstore")}
                type="button"
                class="btn btn-info"
              >
                Your Store Page
              </button>
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
