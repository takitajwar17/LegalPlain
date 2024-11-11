"use client";

import { motion } from "framer-motion";
import { Frown, Lightbulb, Smile } from "lucide-react";
import { Card } from "@/components/ui/card";

const storySteps = [
  {
    icon: Frown,
    title: "Overwhelmed by Legal Jargon?",
    description: "You're not alone. Legal documents are notoriously complex, filled with terms that are hard to understand. This complexity can lead to confusion and misinformed decisions."
  },
  {
    icon: Lightbulb,
    title: "Meet PlainLegal",
    description: "An AI-powered Chrome extension that transforms complex legal documents into clear, plain language you can easily understand."
  },
  {
    icon: Smile,
    title: "Empower Yourself",
    description: "Make informed decisions with confidence. No more confusion or second-guessing when it comes to understanding legal terms."
  }
];

export function Story() {
  return (
    <div className="grid md:grid-cols-3 gap-8">
      {storySteps.map((step, index) => {
        const Icon = step.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <Card className="p-8 bg-white/5 backdrop-blur border-white/10 h-full">
              <Icon className="h-12 w-12 text-purple-400 mb-4" />
              <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
              <p className="text-white/60">{step.description}</p>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}