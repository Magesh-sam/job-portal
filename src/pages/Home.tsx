import { Button } from "@/components/ui/button";

import {
  ArrowRight,
  Briefcase,
  ChevronRight,
  TrendingUp,
  Users,
} from "lucide-react";
import { useNavigate } from "react-router";

export default function Home() {
  const navigate = useNavigate();
  return (
    <main className="min-h-screen bg-background container mx-auto px-4 py-8">
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
              Harness the power of AI to unlock opportunities that resonate with
              your unique skills and aspirations.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300"
                onClick={() => navigate("/login")}
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
                <h2 className="text-xl font-semibold mb-2">{feature.title}</h2>
                <p className="text-gray-400">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to Transcend?
          </h3>
          <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
            Join the vanguard of professionals shaping the future. Your
            extraordinary journey begins here.
          </p>
          <Button
            size="lg"
            className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 transition-all duration-300 rounded-full px-8 py-6 text-lg"
            onClick={() => navigate("/login")}
          >
            Ignite Your Potential <ChevronRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>
    </main>
  );
}
