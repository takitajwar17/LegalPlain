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
    title: "Intelligent Summarization",
    description:
      "Advanced AI algorithms break down complex legal documents into clear, concise summaries.",
  },
  {
    icon: FileText,
    title: "Plain Language Transformation",
    description:
      "Convert legal jargon into everyday language that anyone can understand.",
  },
  {
    icon: Highlighter,
    title: "Interactive Clause Highlighting",
    description:
      "Instantly identify and understand key clauses and their implications.",
  },
  {
    icon: BookOpen,
    title: "Legal Term Definitions",
    description:
      "Get instant definitions and explanations for complex legal terminology.",
  },
  {
    icon: Languages,
    title: "Multilingual Support",
    description:
      "Understand legal documents across multiple languages with accurate translations.",
  },
  {
    icon: StickyNote,
    title: "User Annotations",
    description:
      "Add personal notes and annotations directly to your documents.",
  },
  {
    icon: Accessibility,
    title: "Accessibility Features",
    description:
      "Inclusive design with text-to-speech and adjustable font sizes.",
  },
  {
    icon: Shield,
    title: "Compliance Updates",
    description: "Stay informed about relevant legal compliance requirements.",
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
            Powerful Features for Legal Clarity
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Everything you need to understand and navigate legal documents with
            confidence.
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
              <feature.icon className="h-12 w-12 mb-4 text-blue-600" />
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
