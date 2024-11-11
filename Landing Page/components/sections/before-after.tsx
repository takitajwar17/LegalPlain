"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";
import { useState } from "react";

const examples = [
  {
    title: "Contract Clause",
    original:
      "Notwithstanding anything to the contrary herein, the Party of the First Part shall indemnify, defend, and hold harmless the Party of the Second Part from and against any and all losses, claims, damages, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or relating to any breach of this Agreement.",
    simplified:
      "You (First Party) will protect and compensate the other party for any losses, including legal costs, if you break this agreement.",
  },
  {
    title: "Privacy Policy",
    original:
      "We collect various types of Personal Information that you provide to us directly when you interact with our Services, including but not limited to your name, email address, postal address, phone number, and other information that may be used to identify you.",
    simplified:
      "We collect personal information you give us when you use our services, such as your name, email, address, and phone number.",
  },
  {
    title: "Terms of Service",
    original:
      "The Company reserves the right, at its sole discretion, to modify, discontinue, or terminate the Service or to modify these Terms of Service at any time and without prior notice.",
    simplified:
      "We can change or stop our service and update these terms at any time without telling you first.",
  },
];

export function BeforeAfterSection() {
  const [activeExample, setActiveExample] = useState(0);

  return (
    <section id="examples" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            See the Difference
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Experience how LegalPlain.ai.ai transforms complex legal text into
            clear, understandable language.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-8">
          {examples.map((example, index) => (
            <Button
              key={index}
              variant={activeExample === index ? "default" : "outline"}
              onClick={() => setActiveExample(index)}
              className="w-full"
            >
              {example.title}
            </Button>
          ))}
        </div>

        <motion.div
          key={activeExample}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="grid md:grid-cols-2 gap-8"
        >
          <Card className="p-6 bg-gray-800">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-white">
              <span className="w-3 h-3 rounded-full bg-red-500 mr-2" />
              Original Text
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {examples[activeExample].original}
            </p>
          </Card>

          <Card className="p-6 bg-gray-800">
            <h3 className="text-lg font-semibold mb-4 flex items-center text-white">
              <span className="w-3 h-3 rounded-full bg-green-500 mr-2" />
              Simplified by LegalPlain.ai.ai
            </h3>
            <p className="text-gray-300 leading-relaxed">
              {examples[activeExample].simplified}
            </p>
          </Card>
        </motion.div>
      </div>
    </section>
  );
}
