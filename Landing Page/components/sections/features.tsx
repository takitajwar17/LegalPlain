"use client";

import { motion } from "framer-motion";
import {
  Accessibility,
  BookOpen,
  Brain,
  FileText,
  Highlighter,
  Languages,
  Shield,
  StickyNote,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Legal Mumbo-Jumbo Simplifier",
    description:
      "Our AI turns confusing legal gobbledygook into plain English you can actually understand.",
  },
  {
    icon: FileText,
    title: "Legalese to Human Translator",
    description:
      "Transforms complex legal jargon into language your grandma would approve of.",
  },
  {
    icon: Highlighter,
    title: "Spotlight on Sneaky Clauses",
    description:
      "Shines a light on important clauses so you won't miss any hidden surprises.",
  },
  {
    icon: BookOpen,
    title: "Jargon Buster",
    description:
      "Instantly demystifies baffling legal terms with simple explanations.",
  },
  {
    icon: Languages,
    title: "Polyglot Legal Buddy",
    description:
      "Breaks down legal docs in multiple languages because law shouldn't be lost in translation.",
  },
  {
    icon: StickyNote,
    title: "Add Your Two Cents",
    description:
      "Scribble notes and thoughts directly onto documents—because your insights matter.",
  },
  {
    icon: Accessibility,
    title: "Law for All",
    description:
      "Accessibility features like text-to-speech so everyone can join the legal conversation.",
  },
  {
    icon: Shield,
    title: "Stay Ahead of the Curve",
    description:
      "Keeps you updated on the latest legal changes so you're always in the know.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
    },
  },
};

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 bg-gray-900">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Unlock Legal Clarity with a Twist
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Dive into features that make understanding legal documents not just
            easy, but dare we say, fun.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="group relative overflow-hidden rounded-lg bg-gray-800 p-6 shadow-md transition-shadow hover:shadow-lg"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 opacity-0 transition-opacity group-hover:opacity-100" />
              <feature.icon className="h-12 w-12 mb-4 text-blue-500" />
              <h3 className="text-xl font-semibold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-gray-300">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
