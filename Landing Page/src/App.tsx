import { ArrowDown, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import { BeforeAfter } from "./components/BeforeAfter";
import { Features } from "./components/Features";
import { Navbar } from "./components/Navbar";
import { Story } from "./components/Story";

function App() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar isScrolled={isScrolled} />

      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto text-center z-10">
          <div className="max-w-3xl mx-auto space-y-8">
            <h1 className="text-6xl md:text-8xl font-bold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-white/50">
                Legal Documents,
              </span>
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white/90 to-white/30">
                Finally Clear
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/70">
              Transform complex legal jargon into crystal-clear language with
              AI-powered simplification.
            </p>
            <div className="flex justify-center items-center space-x-4">
              <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all transform hover:scale-105">
                Install Extension
              </button>
              <ArrowRight className="w-6 h-6 text-white/70" />
              <button className="bg-white/10 text-white px-8 py-4 rounded-full text-lg hover:bg-white/20 transition-all">
                Watch Demo
              </button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <ArrowDown className="w-6 h-6 text-white/50 animate-bounce-slow" />
        </div>
      </section>

      {/* Story Section */}
      <Story />

      {/* BeforeAfter Section */}
      <BeforeAfter />

      {/* Features Section */}
      <Features />

      {/* CTA Section */}
      <section className="py-32 px-6 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-8">
            Ready to Simplify Legal Documents?
          </h2>
          <button className="bg-white text-black px-8 py-4 rounded-full text-lg font-medium hover:bg-white/90 transition-all transform hover:scale-105">
            Add PlainLegal to Chrome
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black/50 backdrop-blur-lg py-12 px-6">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <span className="text-xl font-bold">PlainLegal</span>
            </div>
            <div className="flex space-x-6">
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                Privacy
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                Terms
              </a>
              <a
                href="#"
                className="text-white/50 hover:text-white transition-colors"
              >
                Contact
              </a>
            </div>
          </div>
          <div className="mt-8 text-center text-white/30 text-sm">
            © 2024 PlainLegal. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
