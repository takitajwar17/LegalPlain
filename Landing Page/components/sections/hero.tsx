"use client";

import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Chrome } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen pt-10 flex items-center justify-center overflow-hidden px-4 bg-gray-900">
      <div className="absolute inset-0 bg-gradient-radial from-sky-200/10 via-transparent to-transparent"></div>
      <div className="container mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto space-y-8"
        >
          <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold text-white">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-300 to-purple-600">
              Legal Documents,
            </span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-200 to-purple-400">
              Finally Clear
            </span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-white/90">
            Transform complex legal jargon into crystal-clear language with
            AI-powered simplification.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-4">
            <Button
              size="lg"
              className="bg-white text-black hover:bg-white/90 rounded-full px-6 md:px-8"
            >
              <Chrome className="mr-2 h-5 w-5" />
              Install Extension
            </Button>
            <Button
              size="lg"
              variant="ghost"
              className="rounded-full px-6 md:px-8 text-white"
            >
              Watch Demo
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </motion.div>

        {/* Original and Simplified Text Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="mt-16"
        >
          <div className="relative mx-auto max-w-5xl rounded-xl border bg-gray-800 shadow-2xl">
            <div className="absolute -top-3 left-10 h-3 w-3 rounded-full bg-red-500" />
            <div className="absolute -top-3 left-16 h-3 w-3 rounded-full bg-yellow-500" />
            <div className="absolute -top-3 left-22 h-3 w-3 rounded-full bg-green-500" />
            <div className="p-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="rounded-lg bg-gray-700 p-4">
                  <h3 className="text-sm font-medium mb-2 text-white">
                    Original Text
                  </h3>
                  <p className="text-sm text-gray-300">
                    Pursuant to Section 7(b) of the Agreement, the Party of the
                    First Part hereby acknowledges and agrees to indemnify...
                  </p>
                </div>
                <div className="rounded-lg bg-blue-800 p-4">
                  <h3 className="text-sm font-medium mb-2 text-white">
                    Simplified by LegalPlain
                  </h3>
                  <p className="text-sm text-gray-300">
                    According to Section 7(b), you agree to protect and
                    compensate the other party...
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
