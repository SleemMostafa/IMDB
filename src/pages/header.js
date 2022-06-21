import { Link } from "react-router-dom";

export default function Header() {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <h2 className="navbar-brand">Aflam HQ</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="mx-5"
                  to="/"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  style={{ color: "white", textDecoration: "none" }}
                  className="mx-5"
                  to="/Movies"
                >
                  Movies
                </Link>
              </li>
              <li className="nav-item"></li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
