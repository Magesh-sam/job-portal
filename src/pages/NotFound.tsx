import { Button } from "@/components/ui/button";
import { House } from "lucide-react";
import { Link } from "react-router";
function NotFound() {
  return (
    <main className="flex flex-col items-center justify-center h-screen gap-5">
      <h1>404: The page you are looking for was Not Found</h1>
      <Link to="/">
        <Button aria-label="Go back home">
          Go back home
          <House />
        </Button>
      </Link>

      <img
        src="/404.svg"
        alt="Page not found illustration"
        width={400}
        height={400}
      />
    </main>
  );
}

export default NotFound;
