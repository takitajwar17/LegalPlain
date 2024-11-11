import { Frown, Lightbulb, Smile } from "lucide-react";
import React from "react";

export const Story: React.FC = () => (
  <section className="py-32 px-6 bg-gradient-to-b from-black via-gray-900 to-black">
    <div className="container mx-auto max-w-4xl">
      <div className="space-y-20">
        {/* Problem */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <Frown className="w-24 h-24 text-red-500 mb-8 md:mb-0" />
          <div>
            <h2 className="text-4xl font-bold mb-4">
              Overwhelmed by Legal Jargon?
            </h2>
            <p className="text-xl text-white/70 leading-relaxed">
              You're not alone. Legal documents are notoriously complex, filled
              with terms that are hard to understand. This complexity can lead
              to confusion and misinformed decisions.
            </p>
          </div>
        </div>
        {/* Solution */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <Lightbulb className="w-24 h-24 text-yellow-500 mb-8 md:mb-0" />
          <div>
            <h2 className="text-4xl font-bold mb-4">Meet PlainLegal</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              An AI-powered Chrome extension that transforms complex legal
              documents into clear, plain language you can easily understand.
            </p>
          </div>
        </div>
        {/* Result */}
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <Smile className="w-24 h-24 text-green-500 mb-8 md:mb-0" />
          <div>
            <h2 className="text-4xl font-bold mb-4">Empower Yourself</h2>
            <p className="text-xl text-white/70 leading-relaxed">
              Make informed decisions with confidence. No more confusion or
              second-guessing when it comes to understanding legal terms.
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);
