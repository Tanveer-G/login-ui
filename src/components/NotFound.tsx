import { Link } from "react-router-dom";
import { PATHS } from "../routes/paths";

export default function NotFound() {
  return (
    <div style={{ textAlign: "center", padding: "4rem" }}>
      <h1>404 – Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <Link to={PATHS.ROOT}>Go back home</Link>
    </div>
  );
}