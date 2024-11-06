import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div>
      <h1>Error 404: Page Not Found</h1>
      <Link to="/">Home Page</Link>
    </div>
  );
}
