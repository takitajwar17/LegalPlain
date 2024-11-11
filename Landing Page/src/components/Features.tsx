import { Book, Brain, Cloud, Globe, Shield, Zap } from "lucide-react";
import React from "react";

interface Feature {
  icon: JSX.Element;
  title: string;
  description: string;
}

const features: Feature[] = [
  {
    icon: <Brain className="w-10 h-10 text-purple-500" />,
    title: "AI-Powered Simplification",
    description:
      "Complex legal terms automatically converted into plain English using Chrome's built-in AI models.",
  },
  {
    icon: <Shield className="w-10 h-10 text-green-500" />,
    title: "Privacy First",
    description:
      "Your documents never leave your browser. All processing happens locally on your device.",
  },
  {
    icon: <Globe className="w-10 h-10 text-blue-500" />,
    title: "Multi-language Support",
    description:
      "Understand legal documents in your preferred language with instant translation.",
  },
  {
    icon: <Zap className="w-10 h-10 text-yellow-500" />,
    title: "Real-time Processing",
    description:
      "Get simplified versions in milliseconds as you browse through documents.",
  },
  {
    icon: <Book className="w-10 h-10 text-pink-500" />,
    title: "Interactive Dictionary",
    description:
      "Hover over legal terms for instant, plain-language explanations and examples.",
  },
  {
    icon: <Cloud className="w-10 h-10 text-indigo-500" />,
    title: "Offline Capable",
    description:
      "Works entirely in your browser with no external servers or internet connection needed.",
  },
];

export const Features: React.FC = () => (
  <section
    id="features"
    className="py-32 px-6 bg-gradient-to-b from-black via-purple-900 to-black"
  >
    <div className="container mx-auto max-w-6xl">
      <div className="text-center mb-20">
        <h2 className="text-5xl font-bold mb-6 text-white">
          Features That Make a Difference
        </h2>
        <p className="text-xl text-white/70 max-w-2xl mx-auto">
          Discover how PlainLegal empowers you to take control of legal
          documents.
        </p>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="group relative bg-white/5 rounded-3xl p-10 hover:bg-white/10 transition-all duration-300 shadow-lg hover:shadow-2xl"
          >
            <div className="flex items-center justify-center w-20 h-20 bg-white/10 rounded-full mb-6">
              {feature.icon}
            </div>
            <h3 className="text-2xl font-semibold text-white mb-4 group-hover:text-purple-400 transition-colors">
              {feature.title}
            </h3>
            <p className="text-white/70 text-lg leading-relaxed group-hover:text-white">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
);
