"use client";

import { Card } from "@/components/ui/card";
import { Brain, Globe, Shield, Zap, BookOpen, Wifi } from "lucide-react";
import { motion } from "framer-motion";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Simplification",
    description: "Complex legal terms automatically converted into plain English using Chrome's built-in AI models."
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your documents never leave your browser. All processing happens locally on your device."
  },
  {
    icon: Globe,
    title: "Multi-language Support",
    description: "Understand legal documents in your preferred language with instant translation."
  },
  {
    icon: Zap,
    title: "Real-time Processing",
    description: "Get simplified versions in milliseconds as you browse through documents."
  },
  {
    icon: BookOpen,
    title: "Interactive Dictionary",
    description: "Hover over legal terms for instant, plain-language explanations and examples."
  },
  {
    icon: Wifi,
    title: "Offline Capable",
    description: "Works entirely in your browser with no external servers or internet connection needed."
  }
];

export function Features() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="grid md:grid-cols-3 gap-8"
    >
      {features.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <Card 
            key={index}
            className="p-8 bg-white/5 backdrop-blur border-white/10 hover:bg-white/10 transition-colors"
          >
            <Icon className="h-12 w-12 text-purple-400 mb-4" />
            <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
            <p className="text-white/60">{feature.description}</p>
          </Card>
        );
      })}
    </motion.div>
  );
}