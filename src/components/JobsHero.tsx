import { Button } from "./ui/button";

export default function JobsHero() {
  return (
    <section className="text-center py-12 md:py-24 bg-gradient-to-r from-yellow-600 to-red-700 mb-12 rounded-md">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          The #1 Job Platform for Top Talent
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Trusted by thousands of professionals and leading companies. Your next
          big opportunity starts here.
        </p>
        <div className="flex justify-center gap-4">
          <Button
            variant={"secondary"}
            // className="px-6 py-3 text-lg font-semibold bg-white text-indigo-700 hover:bg-gray-200 rounded-lg transition"
          >
            Explore Jobs
          </Button>
          <Button
          // className="px-6 py-3 text-lg font-semibold border border-white hover:bg-white hover:text-indigo-700 rounded-lg transition"
          >
            Join Now
          </Button>
        </div>
      </div>
    </section>
  );
}
