import { Link } from "react-router-dom";
//TODO: Desgin and style Not Found Page
export default function NotFoundPage() {
  return (
    <div>
      <h1>Error 404: Page Not Found</h1>
      <Link to="/">Home Page</Link>
    </div>
  );
}
