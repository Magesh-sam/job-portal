import { Link } from "react-router";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Briefcase,
  Users,
  TrendingUp,
  ChevronRight,
  ArrowRight,
} from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 via-black to-black opacity-50" />

      <header className="relative z-10">
        <div className="container mx-auto px-4 py-6 flex items-center justify-between">
          <Link
            to="/"
            className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"
          >
            NexusHire
          </Link>
          <nav className="hidden md:flex space-x-8">
            {["Discover", "For Employers", "AI Matching"].map((item) => (
              <Link
                key={item}
                to="#"
                className="text-sm font-medium text-gray-300 hover:text-white transition-colors"
              >
                {item}
              </Link>
            ))}
          </nav>
          <Button
            variant="outline"
            className="border-purple-500 text-purple-400 hover:bg-purple-500 hover:text-white transition-all duration-300"
          >
            Launch Career
          </Button>
        </div>
      </header>

      <main className="relative z-10">
        <section className="py-20 md:py-32">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
                Redefine Your{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                  Career Destiny
                </span>
              </h1>
              <p className="text-xl text-gray-400 mb-8">
                Harness the power of AI to unlock opportunities that resonate
                with your unique skills and aspirations.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Input
                  placeholder="Your next role awaits..."
                  className="max-w-xs bg-white/10 border-purple-500 text-white placeholder-gray-500 focus:ring-2 focus:ring-purple-500"
                />
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                >
                  Explore Opportunities <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
            <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  icon: Briefcase,
                  title: "AI-Powered Matching",
                  desc: "Our quantum algorithms decode your career DNA",
                },
                {
                  icon: Users,
                  title: "Elite Network",
                  desc: "Connect with visionaries and industry titans",
                },
                {
                  icon: TrendingUp,
                  title: "Future-Proof Skills",
                  desc: "Stay ahead with predictive skill forecasting",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-lg p-6 hover:bg-white/10 transition-all duration-300"
                >
                  <feature.icon className="h-10 w-10 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-purple-900 opacity-10 transform -skew-y-6" />
          <div className="container mx-auto px-4 relative">
            <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
              Trending Ecosystems
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { name: "Quantum Computing", count: "2,500+" },
                { name: "Biotech Revolution", count: "1,800+" },
                { name: "AI Ethics", count: "3,200+" },
                { name: "Space Exploration", count: "900+" },
                { name: "Sustainable Energy", count: "4,100+" },
                { name: "Cybersecurity", count: "5,000+" },
                { name: "Neurotech", count: "700+" },
                { name: "Robotic Process Automation", count: "2,300+" },
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-white/5 backdrop-blur-lg rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                >
                  <h3 className="font-semibold text-purple-400">
                    {category.name}
                  </h3>
                  <p className="text-sm text-gray-400">
                    {category.count} opportunities
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Transcend?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Join the vanguard of professionals shaping the future. Your
              extraordinary journey begins here.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 rounded-full px-8 py-6 text-lg"
            >
              Ignite Your Potential <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </section>
      </main>

      <footer className="relative z-10 border-t border-white/10 mt-20">
        <div className="container mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-bold mb-4 text-purple-400">NexusHire</h3>
              <p className="text-sm text-gray-400">
                Catalyzing human potential in the age of technological
                singularity.
              </p>
            </div>
            {[
              {
                title: "For Visionaries",
                links: [
                  "Opportunity Nexus",
                  "Skill Augmentation",
                  "Quantum Resume",
                ],
              },
              {
                title: "For Innovators",
                links: [
                  "Talent Acquisition",
                  "Culture Engineering",
                  "Predictive Team Building",
                ],
              },
              {
                title: "Explore",
                links: [
                  "About Our Vision",
                  "Contact the Future",
                  "Privacy Assurance",
                ],
              },
            ].map((column, index) => (
              <div key={index}>
                <h4 className="font-semibold mb-4 text-gray-200">
                  {column.title}
                </h4>
                <ul className="space-y-2">
                  {column.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link
                        to="#"
                        className="text-sm text-gray-400 hover:text-purple-400 transition-colors"
                      >
                        {link}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm text-gray-400">
            © {new Date().getFullYear()} NexusHire. Pioneering the future of
            human potential.
          </div>
        </div>
      </footer>
    </div>
  );
}
