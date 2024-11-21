import { Link } from "react-router-dom";
//TODO: Desgin and style Not Found Page
export default function NotFoundPage() {
  return (
    <main className="flex min-h-screen flex-grow flex-col items-center justify-evenly gap-8 bg-[#669BBC] px-6 py-8">
      <h1 className="text-center text-3xl font-semibold text-[#FDF0D5] lg:text-5xl 2xl:text-7xl">
        Error 404: Page Not Found
      </h1>
      <Link
        className="rounded bg-[#C1121F] px-6 py-3 text-center text-[#FDF0D5] hover:bg-[#780000] max-md:w-full lg:px-8"
        to="/"
      >
        Home Page
      </Link>
    </main>
  );
}
