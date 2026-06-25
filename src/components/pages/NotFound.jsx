import { Link } from "react-router-dom";
import { FaExclamationTriangle } from "react-icons/fa";

function NotFound() {
  return (
    <section className="notfound-page">

      <div className="notfound-card">

        <FaExclamationTriangle
          size={80}
          className="error-icon"
        />

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for doesn't exist
          or has been moved to another location.
        </p>

        <Link
          to="/"
          className="back-home-btn"
        >
          Back To Home
        </Link>

      </div>

    </section>
  );
}

export default NotFound;