"use client";

import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Chrome, FileText, Sparkles } from "lucide-react";

const steps = [
  {
    icon: Chrome,
    title: "Add LegalPlain.ai to Chrome",
    description:
      "Install our extension with a single click from the Chrome Web Store.",
  },
  {
    icon: FileText,
    title: "Navigate to Any Legal Document",
    description:
      "Open any legal document, contract, or terms of service in your browser.",
  },
  {
    icon: Sparkles,
    title: "Activate LegalPlain.ai",
    description:
      "Click the extension icon to instantly transform complex legal text into clear language.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            How LegalPlain.ai Works
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Get started in three simple steps and transform your legal document
            experience.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 relative">
          <div className="hidden md:block absolute top-1/2 left-1/4 right-1/4 h-0.5 bg-gradient-to-r from-transparent via-purple-600 to-transparent -translate-y-1/2" />

          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <Card className="relative bg-gray-800 shadow-2xl h-64 w-full">
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-purple-600/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="h-6 w-6 text-purple-600" />
                  </div>
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-purple-600 text-white text-sm font-medium px-3 py-1 rounded-full">
                    Step {index + 1}
                  </div>
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {step.title}
                  </h3>
                  <p className="text-gray-300">{step.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
