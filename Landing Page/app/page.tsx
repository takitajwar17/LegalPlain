"use client";

import { Button } from "@/components/ui/button";
import { Chrome, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Story } from "./components/Story";
import { BeforeAfter } from "./components/BeforeAfter";
import { Features } from "./components/Features";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">
      {/* Hero Section */}
      <section className="relative min-h-screen pt-20 flex items-center justify-center overflow-hidden px-6">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto text-center z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto space-y-8"
          >
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
              <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
                <Chrome className="mr-2 h-5 w-5" />
                Install Extension
              </Button>
              <Button size="lg" variant="ghost" className="rounded-full px-8">
                Watch Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-6">
          <Story />
        </div>
      </section>

      {/* Before/After Section */}
      <section className="py-24 bg-gradient-to-b from-purple-900/20 to-black">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              See the Difference
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Experience how PlainLegal transforms complex legal language into clear, understandable terms
            </p>
          </motion.div>
          <BeforeAfter />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-gradient-to-b from-black to-purple-900/20">
        <div className="container mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Powerful Features
            </h2>
            <p className="text-xl text-white/70 max-w-2xl mx-auto">
              Everything you need to understand legal documents with confidence
            </p>
          </motion.div>
          <Features />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative">
        <div className="absolute inset-0 bg-gradient-radial from-purple-500/20 via-transparent to-transparent"></div>
        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Simplify Legal Documents?
            </h2>
            <p className="text-xl text-white/70 mb-8">
              Join thousands of users who are already experiencing clearer legal understanding
            </p>
            <Button size="lg" className="bg-white text-black hover:bg-white/90 rounded-full px-8">
              <Chrome className="mr-2 h-5 w-5" />
              Install PlainLegal Now
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}